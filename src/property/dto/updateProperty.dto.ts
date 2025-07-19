import { PartialType } from '@nestjs/mapped-types';
import { createPropertyDto } from './createProperty.dto';
export class UpdatePropertyDto extends PartialType(createPropertyDto) {

}