import { GymOfferDetailDto } from "./gymofferdetail.dto";

export class GymPassDto
{
    id: number;
    startDate: string;
    endDate: string;
    gymOfferDetail: GymOfferDetailDto
}