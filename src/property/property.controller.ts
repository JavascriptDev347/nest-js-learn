import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return "All properties";
    }

    @Get(':id/')
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
        return "Property by id: " + id;
    }

    @Post()
    // @HttpCode(200)
    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     groups: ["create"],
    //     always: true
    // })
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body:CreatePropertyZodDto ) {
        return body;
    }

    @Patch(":id")
    // new ValidationPipe({
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //         groups: ["update"],
    //         always: true
    //     })
    update(
        @Param("id", ParseIdPipe) id,
        @Body()
        body: createPropertyDto
    ) {
        return body;
    }
}
