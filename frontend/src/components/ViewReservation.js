import React from "react";
import styled from "styled-components";

import planeImg from "../assets/airplane.png";
import barcodeImg from "../assets/barcode.png"; 

const ViewReservation = (reservation) => {
  let currReservation = reservation.reservation; 

  return <Wrapper>

        <Top><span>RESERVATION</span><span>Thank you for choosing SlingAir</span></Top>
        <Middle>
            <MiddleLeft>
                <LeftTop>GIVEN NAME</LeftTop>
                <LeftBottom>{currReservation.givenName}</LeftBottom>
                <LeftTop>SURNAME</LeftTop>
                <LeftBottom>{currReservation.surname}</LeftBottom>
            </MiddleLeft>
            <MiddleCenter>
                <PlaneImg src={planeImg} />
            </MiddleCenter>
            <MiddleRight>
                <Sub>
                        <LeftTop>EMAIL</LeftTop>
                        <LeftBottom>{currReservation.email}</LeftBottom>			
                </Sub>
            </MiddleRight>

        </Middle>
        <Bottom>
            <BottomRight>
                <Sticker>
                    <StickerTitle>FLIGHT</StickerTitle>
                    <StickerNumber>{currReservation.flight}</StickerNumber>
                </Sticker>
                <Sticker>
                    <StickerSeatTitle>SEAT</StickerSeatTitle>
                    <StickerNumber>{currReservation.seat}</StickerNumber>
                </Sticker>

            </BottomRight>
            <BottomLeft>
                {/* <Sticker>
                    <StickerIDTitle>ID</StickerIDTitle>
                    <StickerNumber>{currReservation.id}</StickerNumber>
                </Sticker> */}
                <div>
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                    <BarcodeImg  src={barcodeImg} />
                </div>

                <div>79cd3748-023a-458f-873e-8eb4c0aac3f2</div>


            </BottomLeft>
        </Bottom>


</Wrapper>;
};

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    border: 1px solid #AA001E;
    width: 650px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
    margin-top: 30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
  
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;	
    justify-content: space-between;
    padding: 10px 17px 10px 17px;
    width: 100%;
    background-color: #AA001E;
    color: #fff;
    flex: 0.2;
    border-radius: 7px 7px 0 0;
  
`;

const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    width: 100%;
    flex: 1;
    border-bottom: dashed;
    border-color: #AA001E;
    padding-bottom: 5px;
    padding-top: 5px;

`;


const MiddleCenter = styled.div`
    border: 2px dashed #AA001E;
    border-top: none;
    border-bottom: none;
    padding: 0 10px 0 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const MiddleLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const MiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    padding: 0 15px 0 15px;
    flex: 0.8;
    align-items: center;
    justify-content: space-between;
`;
const LeftTop = styled.div`
    font-size: 11px;
`;
const LeftBottom = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
`;
const Sub = styled.div`
    &:nth-child(1){
        margin-bottom: 15px;
    }
`;

const Sticker = styled.div`
    border: 1px solid #AA001E;
    border-radius: 4px;
    color: #fff;
    background-color: #AA001E;
    padding: 10px;
    padding-left: 13px;
    margin-right: 5px;
`;

const StickerTitle = styled.div`
    color: #fff;
    font-size: 9px;
    transform: rotate(-90deg) translateX(3px) translateY(-31px);
`;

const StickerSeatTitle = styled.div `
    color: #fff;
    font-size: 9px;
    transform: rotate(-90deg) translateX(-7px) translateY(-18px);
`;
const StickerIDTitle = styled.div `
    color: #fff;
    font-size: 9px;
    transform: rotate(-90deg) translateX(137px) translateY(-158px);
`;


const StickerNumber = styled.div`
    color: #fff;
    font-weight: bold;
    padding-left: 6px;
`;

const BottomRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const BottomLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #AA001E;
`;
const PlaneImg = styled.img`
    height: 100px;
`;

const BarcodeImg = styled.img`
    height: 40px;
`;



export default ViewReservation;