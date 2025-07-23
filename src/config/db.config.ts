import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default (): PostgresConnectionOptions => (
    {
        type: "postgres",
        url: process.env.url,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,

    }
)