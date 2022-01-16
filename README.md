<h1 align="center">
	<img alt="Logo" src="https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-1219452187_428049.jpg" width="120px" />
</h1>

<h3 align="center">
  Meetups
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/laporeon/meetups-api">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/laporeon/meetups-api">
  
  <a href="https://github.com/laporeon/meetups-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/laporeon/meetups-api">
  </a>
  
  <a href="https://github.com/laporeon/meetups-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/laporeon/meetups-api">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/laporeon/meetups-api">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 📜 About the project

This is a personal project made with the main purpose to practice creating an API using Sequelize as an ORM. It simulates a management system for online events, where administrators can create new events.

---
## 🚀 Technologies

Technologies used to develop this project:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Follow the steps below**

```bash

# Clone the project and access the folder
$ git clone https://github.com/laporeon/meetups-api.git && cd meetups-api

# Install the dependencies
# using yarn
$ yarn 
# using npm
$ npm i

# Conect with database:
# Change the name of .env.sample to .env
# Inside it, pass your credentials into the respective variables

# Create database and database tables
# using yarn
$ yarn sequelize db:create # Create database schema
$ yarn sequelize db:migrate # Create database tables
# using npm
$ npx sequelize db:create # Create database schema
$ npx sequelize db:migrate # Create database tables

# Start application
# using yarn
$ yarn dev
# using npm
$ npm run dev


# Project has been started!
# Open the application in your browser on port 4001 with http://localhost:4001/

# To access swagger docs, go to http://localhost:4001/api-docs
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[⬆ Back to the top](#-about-the-project)
