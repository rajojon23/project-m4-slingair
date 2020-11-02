import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";

const initialState = { seat: "", givenName: "", surname: "", email: "" };

const SeatSelect = ({ updateUserReservation }) => {
  const history = useHistory();
  const [flightNumber, setFlightNumber] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [subStatus, setSubStatus] = useState("idle");

  let updateReservation = updateUserReservation;

  useEffect(() => {
    // This hook is listening to state changes and verifying whether or not all
    // of the form data is filled out.
    Object.values(formData).includes("") || flightNumber === ""
      ? setDisabled(true)
      : setDisabled(false);
  }, [flightNumber, formData, setDisabled]);

  const handleFlightSelect = (ev) => {//this is used in the FlightSelect.js component 
    setFlightNumber(ev.target.value);
  };

  const handleSeatSelect = (seatId) => {
    setFormData({ ...formData, seat: seatId });
  };

  const handleChange = (val, item) => {
    setFormData({ ...formData, [item]: val });

  };

  const validateEmail = () => {
    const emailParts = formData.email.split("@");
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].length > 0
    );
  };

  const handleSubmit = (ev) => {//submit has been called

    ev.preventDefault();

    formData.flight = flightNumber; 
    if (validateEmail()) {
      // TODO: Send data to the server for validation/submission
      fetch("/reservation", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const { status, error } = json;
  
          console.log("received message", json);
          if (status === 201) {
            setSubStatus("confirmed");
            // TODO: if 201, add reservation id (received from server) to localStorage
            localStorage.setItem('reservationID', json.reservationID);

            formData.id = json.reservationID;
            
            updateReservation(formData);//notify App component of state change so rerender is needed
            // TODO: if 201, redirect to /confirmed (push)
            history.push('/confirmed');//using the already created history const to go to '/confirmed' 
            

          } else if (error) {
            setSubStatus("error");
          }
        });

      
      
      // TODO: if error from server, show error to user (stretch goal)
    }
    else{
      // else, email is wrong, lol
    }
  };

  return (
    <>
      <FlightSelect
        flightNumber={flightNumber}
        handleFlightSelect={handleFlightSelect}
      />
      <h2>Select your seat and Provide your information!</h2>
      <Form
        flightNumber={flightNumber}
        formData={formData}
        handleChange={handleChange}
        handleSeatSelect={handleSeatSelect}
        handleSubmit={handleSubmit}
        disabled={disabled}
        subStatus={subStatus}
      />
    </>
  );
};

export default SeatSelect;
