require("dotenv").config();
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");

const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//endpoints
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  return sequelize
    .query(
      `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
    )
    .then((result) => res.send(result[0]).status(200));
});

let var1;
let var2;

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  sequelize
    .query(`SELECT * FROM users WHERE username = '${username}'`)
    .then((result) => {
      // console.log(result[0].length);
      var1 = result[0].length;
    });

  sequelize
    .query(`SELECT * FROM users WHERE password = '${password}'`)
    .then((result) => {
      // console.log(result[0].length);
      var2 = result[0].length;
    });

  if (var1 === 1 && var2 === 1) {
    const response = false;
    res.status(200).send(response);
  } else {
    const response = true;
    res.status(200).send(response);
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//npm i sequelize pg pg-hstore axios dotenv express cors
//express sesion
