import { getRepository } from "typeorm";

import Posts from "../../src/entities/Posts";
import Users from "../../src/entities/Users";

export async function clearDatabase () {
    await getRepository(Posts).delete({});
    await getRepository(Users).delete({});
}