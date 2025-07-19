// import { createParamDecorator, ExecutionContext } from "@nestjs/common";
// import { plainToInstance } from "class-transformer";
// import { validateOrReject } from "class-validator";

// export const RequestHeader = createParamDecorator(
//     async (targerDto: any, ctx: ExecutionContext) => {
//         const headers = ctx.switchToHttp().getRequest().headers;

//         const dto = plainToInstance(targerDto, headers, { excludeExtraneousValues: true });
//         await validateOrReject(dto);
//         return dto;
//     }
// ) 

import { BadRequestException, ExecutionContext, createParamDecorator } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
    async (targetDTo: any, ctx: ExecutionContext) => {
        const headers = ctx.switchToHttp().getRequest().headers;
        const dto = plainToInstance(targetDTo, headers, {
            excludeExtraneousValues: true,
        });
        // await validateOrReject(dto);
        try {
            await validateOrReject(dto);
        } catch (error) {
            throw new BadRequestException(error);
        }
        return dto;
    },
);