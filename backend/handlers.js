"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {



  res.status(200).json({
    "status": "success",
    "message": "flight list requested",
    "data": flights
  });

};

const getFlight = (req, res) => {

  let flightNumber = req.params.number;


  let seats = flights[flightNumber];


  res.status(200).json({
    "status": "success",
    "message": "flight requested",
    "data": seats
  });

};

const addReservations = (req, res) => {
  let newReservation = req.body;

  newReservation.id = uuidv4();


  reservations.push(newReservation);


  console.log("reservations", reservations);

  res.status(200).json({
    "status": 201,
    "message": "reservation confirmed",
    "reservationID": newReservation.id
  });
};

const getReservations = (req, res) => {


  res.status(200).json({
    "status": 201,
    "message": "reservation list requested",
    "reservations": reservations
  });
 
};

const getSingleReservation = (req, res) => {
  let reqReservation =  req.params.reservationID;
  let result = reservations.filter(reservation => reqReservation == reservation.id);


  console.log("result reservation", result);

  res.status(200).json({
    "status": 201,
    "message": "reservation requested",
    "reservation": result
  });
  
};

const deleteReservation = (req, res) => {

  let toDeleteID = req.params.reservationID;
  let status = 400;
  let statusJson = 400;
  let message = "reservation not found";

  reservations.forEach((reservation)=>{

    if(reservation.id == toDeleteID){
      reservations = reservations.splice(reservations.indexOf(reservation), 1);
      status = 201;
      message = "reservation removed";
      statusJson = 200;
    }
    
  });
  res.status(statusJson).json({
    "status": status,
    "message": message,
    "idRequested": toDeleteID
  });
};

const updateReservation = (req, res) => {

  let updatedReservation = req.body;
  let status = 400;
  let statusJson = 400;
  let message = "reservation not found";
  reservations.forEach((reservation)=>{

    if(reservation.id == updatedReservation.id){
      reservation = updatedReservation;
      status = 201;
      message = "reservation updated";
      statusJson = 200;
    }

  });

  res.status(statusJson).json({
    "status": status,
    "message": message
  });

};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
