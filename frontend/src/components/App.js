import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import ViewReservation from "./ViewReservation";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  let [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {//this function will have to be passed to the SeatSelect component so the state change will be known between them
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state

    if(localStorage.getItem('reservationID')){//if localstorage exists
     
      let localID = localStorage.getItem('reservationID');

      fetch(`/reservations/${localID}`)
      .then((res) => res.json())
      .then((json) => {

        updateUserReservation(json.reservation[0]);
       
      });

    }
    else{
      //console.log("localstorage does not exist", localStorage.getItem('reservationID'));
    }

  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header reservation={userReservation}/>
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation}/>
          </Route>
          <Route exact path="/confirmed">
            <Confirmation reservation={userReservation}/>
          </Route>
          <Route exact path="/view-reservation">
            <ViewReservation reservation={userReservation}/>
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: ${themeVars.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
