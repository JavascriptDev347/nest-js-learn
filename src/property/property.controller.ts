import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseFilePipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';



@Controller('property')
export class PropertyController {


    constructor(private propertyService: PropertyService) {
        // this.propertyService = new PropertyService();
    }


    @Get()
    findAll(@Query() paginationDto: PaginationDTO) {
        return this.propertyService.findAll(paginationDto);
    }

    @Get(':id/')
    findOne(@Param("id", ParseIntPipe) id) {
        return this.propertyService.findOne(id);
    }

    @Post()
    create(@Body() body: createPropertyDto) {
        return this.propertyService.create(body);
    }


    @Patch(":id")
    update(
        @Param("id", ParseIdPipe) id,
        @Body()
        body: UpdatePropertyDto,

    ) {
        return this.propertyService.update(id, body);
    }

    @Delete(":id")
    delete(@Param("id", ParseFilePipe) id) {
        return this.propertyService.delete(id);
    }
}
