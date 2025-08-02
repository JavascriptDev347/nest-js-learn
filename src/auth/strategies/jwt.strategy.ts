import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigType } from '@nestjs/config';
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(jwtConfig.KEY) private jwtConfiguration: ConfigType<typeof jwtConfig>,
        private authService: AuthService, // Assuming you have an AuthService to handle user validation
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "#2$554Rustrambek_)()89",
        })

    }

    async validate(payload: AuthJwtPayload) {
        const userId = payload.sub;
        return this.authService.validateJwtUser(userId)
    }
}