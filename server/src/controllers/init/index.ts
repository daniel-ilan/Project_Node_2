import { Response, Request } from "express";
import { IMember } from "../../types";
import { subscriptionsDAL } from '../../configs/subscriptionsDAL';


const initData = async (req: Request, res: Response): Promise<void> => {
    try {
        const members: any = await subscriptionsDAL();
        res
            .status(201)
            .json({ message: "All members added", subscriptions: members })

    } catch (error) {
        throw error
    }
}


export default initData;