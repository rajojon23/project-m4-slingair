import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch(`/flights`)
      .then((res) => res.json())
      .then((json) => {

        setFlights(Object.keys(json.data));
      });
    
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
      
      <FlightListSelect defaultValue="Choose your flight" onChange={handleFlightSelect}>
      
          {flights.map((flight) => (
              <FlightOption>{flight}</FlightOption>
          ))}
          <FlightOption disabled >Choose your flight</FlightOption>

      </FlightListSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;
const FlightListSelect = styled.select`
  padding: 5px;
  border-radius: 3px;
`;
const FlightOption = styled.option`
  color: blue;
`;


export default FlightSelect;
