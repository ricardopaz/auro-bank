import { createDeal } from "./rd-station/create-deal";
import { NextApiRequest, NextApiResponse } from "next";
import { createRdLead } from "./rd-station/create-lead";

export const newLeadContact = async (req: NextApiRequest, res: NextApiResponse): Promise<void | NextApiResponse> => {
  try {
    const data = req.body
    
    // 1 - Create a lead on RD
    const rdLead = await createRdLead(data)

    // 3 - Create a deal on RD
    await createDeal({
      ...data,
      lead: rdLead,
      userId: process.env.RD_STATION_DEFAULT_USER,
    })

    return res.send(200);
  } catch (error) {
    return res.send(500);
  }
}
