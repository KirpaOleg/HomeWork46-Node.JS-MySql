const config = require('../config/storedb');
const mysql = require('mysql2/promise');



const getAllUsers = async () => {
  try {
    const connection = await mysql.createConnection(config);
    console.log('connection success');
    const query = `SELECT * FROM USERS`;
    const [row, fields] = await connection.execute(query);
    connection.end();
    return row;
  } catch (err) {
    console.log(err);
    connection.end();
  }
  
}

const creteNewUser = async (user) => {
  const {name, surname, telefon} = user;
  try {
    const connection = await mysql.createConnection(config);
    console.log('CONNECT >>>');
    const query = `
    INSERT Users(name, surname, telefon)
    VALUES ('${name}', '${surname}', '${telefon}')`;
    const [rows, fields] = await connection.execute(query);  
    connection.end();
    return rows;
  } catch (err) {
    console.log(err);
    connection.end();
  }
}

const updateUser = async (user) => {
  const {name, surname, telefon, id} = user;
  try {
    const connection = await mysql.createConnection(config);
    console.log('CONNECT >>>');
    const query = `
    UPDATE Users(name, surname, telefon)
    SET name = '${name}', surname = '${surname}', telefon = '${telefon}'
    WHERE id = '${id}'`;
    const [rows, fields] = await connection.execute(query);  
    connection.end();
    return rows;
  } catch (err) {
    console.log(err);
    connection.end();
  }
}



module.exports = {
  getAllUsers: getAllUsers, 
  creteNewUser: creteNewUser,
}