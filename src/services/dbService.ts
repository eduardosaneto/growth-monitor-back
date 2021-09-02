// import { getConnection } from "typeorm";
// import { getRepository } from "typeorm";
// import Users from "../entities/Users";
// import Addresses from "../entities/Addresses";
// import Companies from "../entities/Companies";
// import Posts from "../entities/Posts";
// import UsersAddresses from "../entities/UsersAddresses";
// import UsersCompanies from "../entities/UsersCompanies";
// import axios from "axios";
// import { User } from "../interfaces/User";

// export async function populateDb() {
//   const users = [];
//   const companies = [];
//   const addresses = [];
//   const usersAdd = [];
//   const usersCia = [];
//   for (let i = 1; i <= 10; i++) {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/users/${i}`
//     );
//     const user = getUsers(response.data);
//     const company = getCompanies(response.data);
//     const address = getAddresses(response.data);
//     users.push(user);
//     companies.push(company);
//     addresses.push(address);
//     usersAdd.push({ userId: i, addressId: i });
//     usersCia.push({ userId: i, companyId: i });
//   }
//   await getRepository(Users).save(users);
//   await getRepository(Companies).save(companies);
//   await getRepository(Addresses).save(addresses);
//   await getRepository(UsersAddresses).save(usersAdd);
//   await getRepository(UsersCompanies).save(usersCia);
// }

// function getUsers(users: User) {
//   const user = {
//     id: users.id,
//     name: users.name,
//     username: users.username,
//     email: users.email,
//     phone: users.phone,
//     website: users.website,
//   };
//   return user;
// }

// function getCompanies(users: User) {
//   const company = {
//     name: users.company.name,
//     catchPhrase: users.company.catchPhrase,
//     bs: users.company.bs,
//   };
//   return company;
// }

// function getAddresses(users: User) {
//   const address = {
//     street: users.address.street,
//     suite: users.address.suite,
//     city: users.address.city,
//     zipCode: users.address.zipcode,
//     lat: users.address.geo.lat,
//     lng: users.address.geo.lng,
//   };
//   return address;
// }

// export async function populatePosts() {
//   const posts = [];
//   for (let i = 1; i <= 100; i++) {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/posts/${i}`
//     );
//     const post = {
//       userId: response.data.userId,
//       id: response.data.id,
//       title: response.data.title,
//       body: response.data.body,
//     };
//     posts.push(post);
//   }
//   await getRepository(Posts).save(posts);
//   return posts;
// }

// export async function checkDb() {
//   const thereIsAUser = getRepository(Users).findOne({ where: { id: 1 } });
//   const thereIsAPost = getRepository(Posts).findOne({ where: { id: 1 } });
//   if (thereIsAUser || thereIsAPost) return false;
//   else return true;
// }
