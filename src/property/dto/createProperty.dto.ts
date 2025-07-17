import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class createPropertyDto {
    @IsString()
    @Length(4, 10, { message: "Error length" })
    name: string;

    @IsString()
    @Length(2, 50, { groups: ['create'] })
    @Length(1, 5, { groups: ['update'] })
    description: string;

    @IsInt()
    @IsPositive({ message: "Error positive" })
    area: number;
}