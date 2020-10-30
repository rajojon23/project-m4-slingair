import React from "react";
import styled from "styled-components";

const ViewReservation = (reservation) => {
  let currReservation = reservation.reservation; 

  return <Wrapper>
  <Title>Your reservation details</Title>
  <ul>
    <List><span>Full name:</span> {`${currReservation.givenName} ${currReservation.surname}`}</List>
    <List><span>Reservation #:</span> {currReservation.id}</List>
    <List><span>Flight #:</span> {currReservation.flight}</List>
    <List><span>Seat #:</span> {currReservation.seat}</List>
    <List><span>Email:</span> {currReservation.email}</List>
  </ul>
  


</Wrapper>;
};

const Wrapper = styled.div`
  width: 600px;
  height:300px;
  border: 2px solid #AA001E;
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 3px;
  
`;

const Title = styled.div`
  font-size: 30px;
  color: #AA001E;
  margin: 20px;
  border-bottom: 2px solid #AA001E;
  padding-bottom: 10px;
  font-weight: bold;
  
`;

const List = styled.li`
  margin: 20px;
  
  span{
    font-weight: bold;
  }
  
`;

export default ViewReservation;