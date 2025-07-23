import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// for production 
export default (): PostgresConnectionOptions => (
    {
        type: "postgres",
        url: process.env.url,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,

    }
)