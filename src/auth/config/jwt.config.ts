import { registerAs } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";

export default registerAs("jwt", (): JwtModuleOptions => ({
    secret: "#2$554Rustrambek_)()89",
    signOptions: {
        expiresIn: process.env.JWT_EXPIRE_IN,
    },
}));