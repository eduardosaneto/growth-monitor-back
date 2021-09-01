import { getConnection } from "typeorm";
import { getRepository } from "typeorm";
import Users from "../entities/Users";
import Addresses from "../entities/Addresses";
import Companies from "../entities/Companies";
import GeoPositions from "../entities/GeoPositions";
import Posts from "../entities/Posts";
import UsersAddresses from "../entities/UsersAddresses";
import UsersCompanies from "../entities/UsersCompanies";
import axios from "axios";
import { User } from "../interfaces/User";

export async function populateDb() {
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${i}`);
    const user = getUsers(response.data);
    users.push(user);
  }
  await getRepository(Users).save(users);
  return users;
}

function getUsers(users: User) {
  const user = {
    id: users.id,
    name: users.name,
    username: users.username,
    email: users.email,
    phone: users.phone,
    website: users.website,
  };
  return user;
}

export async function populatePosts() {
    const pokemons = [];
    for (let i = 1; i <= 250; i++) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        number: response.data.order,
        image: response.data.sprites.front_default,
        weight: response.data.weight,
        height: response.data.height,
        baseExp: response.data.base_experience,
        description: "",
        inMyPokemons: false,
      };
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${i}`
      );
      pokemon.description = species.data.flavor_text_entries[0].flavor_text
        .split("\n")
        .join(" ");
      pokemons.push(pokemon);
    }
    await getRepository(Pokemons).save(pokemons);
    return pokemons;
  }
