import fs from 'fs';
import path from 'path';
import handlebars from "handlebars";

import { sendEmail } from '@/utils/mail';
import { HttpMethod } from '@/utils/enum';
import { PRODUCTS_LABELS } from '@/utils/constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HttpMethod.POST:
      const { finder, products } = req.body
      const parsedProducts = products.map(prod => PRODUCTS_LABELS[prod])

      const filePath = path.join(process.cwd(), '/src/templates/finder-lead.template.html');
      const source = fs.readFileSync(filePath, 'utf-8').toString();
      const template = handlebars.compile(source);
      const htmlToSend = template({ ...req.body, products: parsedProducts });

      await sendEmail({
        html: htmlToSend,
        subject: `[AuroBank][Leads][Finder] ${finder}`, 
        to: process.env.MAIL_TO.toString().split(','), 
      });
    default:
      res.setHeader("Allow", [HttpMethod.POST]);
      return res.send(405);
  }
}
