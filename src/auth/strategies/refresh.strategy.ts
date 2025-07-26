import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigType } from '@nestjs/config';
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Inject, Injectable, Req, UnauthorizedException } from "@nestjs/common";
import refreshJwtConfig from "../config/refresh-jwt.config";
import { Request } from "express";
import { AuthService } from '../auth.service';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, "refresh-jwt") {
    constructor(
        @Inject(refreshJwtConfig.KEY) private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
        private authService: AuthService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "#2$554Rustrambek_)()89",
            ignoreExpiration: false,
            passReqToCallback: true,
        })

    }

    async validate(req: Request, payload: AuthJwtPayload) {
        // const refreshToken = req.get("authorization")?.replace("Bearer ", "").trim();
        const authHeader = req.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new UnauthorizedException("Refresh token is missing or malformed");
        }

        const refreshToken = authHeader.replace("Bearer ", "").trim();
        const userId = payload.sub;
        return this.authService.validateRefreshToken(userId, refreshToken);
    }
}