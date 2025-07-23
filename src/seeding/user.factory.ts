import { faker } from "@faker-js/faker";
import { User } from "../entities/user.entity";
import { setSeederFactory } from "typeorm-extension";
import * as bcrypt from 'bcrypt';
export const UserFactory = setSeederFactory(User, async () => {
    const user = new User();

    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.email = faker.internet.email();
    user.avatarUrl = faker.image.avatar();
    user.password = await bcrypt.hash(user.password, 10)
    return user;
})