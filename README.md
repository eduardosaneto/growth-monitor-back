# Growth Monitor:
API to help monitor companies activities
## About 🔎
API to get posts from employees from several companies.

## API link:
https://growth-monitor.herokuapp.com/

## Please check also the web application: 
https://growth-monitor.vercel.app/
## Tech tools :wrench:
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

## How to run
1. Clone this repository
2. Clone the [front-end repository](https://github.com/eduardosaneto/growth-monitor)
3. Follow instructions to run [front-end](https://github.com/eduardosaneto/growth-monitor#readme)
4. Install dependencies
```bash
npm i
```
5. Create a database using ``migrations`` 
- 5.1 Start postgres in your machine
```bash
sudo service postgresql start
```
- 5.2 Enter to postgres terminal
```bash
sudo su postgres
psql postgres
```
- 5.3 Create a database
```bash
CREATE DATABASE [database_name];
```
- 5.4 Insert your database info at ``.env file`` as the following example
```bash
DATABASE_URL='postgres://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME'
```
- 5.5 Finally, you can run migrations to create the tables
```bash
npm run build
npm run typeorm migration: run
```

6. Run the back-end with
```bash
npm start
```