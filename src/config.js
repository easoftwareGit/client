require("dotenv").config();

const devConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
  baseUrl: `${process.env.DEVROOT}${process.env.PGHOST}:${process.env.PORT}${process.env.BASEURL}`
}

module.exports = devConfig; 