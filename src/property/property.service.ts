import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { createPropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {


    constructor(@InjectRepository(Property) private propertyRepository: Repository<Property>) {

    }
    async findAll() {
        return this.propertyRepository.find();
    }

    async findOne(id: number) {
        const p = await this.propertyRepository.findOne({
            where: {
                id
            }
        });

        if (!p) {
            throw new NotFoundException();
        }

        return p;
    }
    async create(dto: createPropertyDto) {
        return await this.propertyRepository.save(dto);
    }

    async update(id: number, dto: UpdatePropertyDto) {
        return await this.propertyRepository.update({ id }, dto)
    }

    async delete(id: number) {
        return await this.propertyRepository.delete({ id });
    }
}
