import fs from 'fs';
import path from 'path';
import handlebars from "handlebars";

import { sendEmail } from "@/utils/mail"
import { createDeal } from "../rd-station/create-deal"
import { createRdLead } from "../rd-station/create-lead"
import { PRODUCTS_LABELS } from '@/utils/constants';

export const createFinderLead = async (lead, products) => {
  // 1 - Create a lead on RD
  const rdLead = await createRdLead(lead)

  // 2 - Criate a deal to "Atendimento"
  await createDeal({
    ...lead,
    lead: rdLead,
    product: 'ATENDIMENTO',
    userId: process.env.RD_STATION_DEFAULT_USER,
  })

  // 3 - Create a deal on RD for each products
  for (let index = 0; index < products.length; index++) {
    await createDeal({
      ...lead,
      lead: rdLead,
      product: products[index],
      userId: process.env.RD_STATION_DEFAULT_USER,
    })
  }
}

export const sendEmailFinderLead = async (lead, products) => {
  const parsedProducts = products.map(prod => PRODUCTS_LABELS[prod])

  const filePath = path.join(process.cwd(), '/src/templates/finder-lead.template.html');
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const htmlToSend = template({ ...lead, products: parsedProducts });

  await sendEmail({
    html: htmlToSend,
    subject: `[AuroBank][Leads][Finder] ${lead.finder}`, 
    to: process.env.MAIL_TO.toString().split(','), 
  });
}