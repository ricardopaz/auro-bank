import fs from 'fs';
import path from 'path';
import handlebars from "handlebars";

import { sendEmail } from '@/utils/mail';
import { HttpMethod } from '@/utils/enum';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HttpMethod.POST:
      const { name } = req.body
      const filePath = path.join(process.cwd(), '/src/templates/finder.template.html');
      const source = fs.readFileSync(filePath, 'utf-8').toString();
      const template = handlebars.compile(source);
      const htmlToSend = template({ ...req.body });

      await sendEmail({
        html: htmlToSend,
        to: process.env.MAIL_TO.toString().split(','), 
        subject: `[AuroBank][Novo Finder] ${name}`, 
      });
    default:
      res.setHeader("Allow", [HttpMethod.POST]);
      return res.send(405);
  }
}
