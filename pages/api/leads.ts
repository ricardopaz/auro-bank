import { HttpMethod } from '@/api/enum';
import { newLeadContact } from '@/api/contacts';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HttpMethod.POST:
      return await newLeadContact(req, res)
    default:
      res.setHeader("Allow", [HttpMethod.POST]);
      return res.send(405);
  }
}
