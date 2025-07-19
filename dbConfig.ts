import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
    type: "postgres",
    url: 'postgresql://neondb_owner:npg_Bp7eZdoWNXk3@ep-small-pine-aeygjorx-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    // port: 3306,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,

}