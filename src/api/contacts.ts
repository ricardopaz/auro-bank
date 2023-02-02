import { PRODUCT } from "@/utils/constants";
import { createDeal } from "./rd-station/create-deal";
import { NextApiRequest, NextApiResponse } from "next";
import { createRdLead } from "./rd-station/create-lead";
import { createActivitiesForFinancy } from "./rd-station/create-activities";

export const newLeadContact = async (req: NextApiRequest, res: NextApiResponse): Promise<void | NextApiResponse> => {
  try {
    const data = req.body
    
    // 1 - Create a lead on RD
    const rdLead = await createRdLead(data)

    // 2 - Create a deal on RD
    const rdDeal = await createDeal({
      ...data,
      lead: rdLead,
      userId: process.env.RD_STATION_DEFAULT_USER,
    })

    // 3 - Create activities if need
    if (rdDeal?._id) {
      switch (data.product) {
        case PRODUCT.FINANCY:
          await createActivitiesForFinancy(rdDeal._id, data)
          break;
      }
    }

    return res.send(200);
  } catch (error) {
    return res.send(500);
  }
}
