import { BrandDto } from "./brand.dto";

export class GymOfferDto
{
    id: number;
    brandDto: BrandDto;
    location: string;
    street: string;
    description: string;
}