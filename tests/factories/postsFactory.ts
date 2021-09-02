import { getRepository } from "typeorm";
import axios from "axios";
import Posts from "../../src/entities/Posts";
import Users from "../../src/entities/Users";

export async function createUsers() {
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${i}`
    );
    const user = {
      id: response.data.id,
      name: response.data.name,
      username: response.data.username,
      email: response.data.email,
      phone: response.data.phone,
      website: response.data.website,
    };
    users.push(user);
  }
  await getRepository(Users).save(users);
}

export async function createPosts() {
  const posts = [];
  for (let i = 1; i <= 5; i++) {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${i}`
    );
    const post = {
      userId: response.data.userId,
      id: response.data.id,
      title: response.data.title,
      body: response.data.body,
    };
    posts.push(post);
  }
  await getRepository(Posts).save(posts);
}
