import { HttpMethod } from '@/utils/enum';
import { NextApiRequest, NextApiResponse } from 'next';
import { createFinderLead, sendEmailFinderLead } from '@/api/finders/lead';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HttpMethod.POST:
      const { products, ...lead } = req.body

      await createFinderLead(lead, products)
      await sendEmailFinderLead(lead, products)
    default:
      res.setHeader("Allow", [HttpMethod.POST]);
      return res.send(405);
  }
}
