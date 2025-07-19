import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class createPropertyDto {
    @IsString()
    @Length(4, 10, { message: "Error length" })
    name: string;

    @IsString()
    description: string;

    @IsInt()
    @IsPositive({ message: "Error positive" })
    price: number;
}