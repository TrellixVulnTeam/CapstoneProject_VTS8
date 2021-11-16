import styled, { keyframes } from 'styled-components';
import {  lightSpeedIn, flash } from 'react-animations';

export const CampCon = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 8rem;
margin: 10rem;
background-color:#FF4500;
padding: 10rem;
border-radius: 10cm;
`
export const CampaignsDiv = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
height: 30rem;
width: 20rem;
/* background-color: #FF4500 ; */
`


const speedAnimation = keyframes `${lightSpeedIn}`
export const CampImg = styled.img`
animation: 3s ${speedAnimation};
border-radius: 6px;
margin:2;
height:25rem;
width: 20rem;
`

export const DonateButton = styled.button`
width: 10rem;
color: whitesmoke;
background-color: #6C8255;
border-radius:5px;
`


export const DonationInput = styled.input`
width:10rem ;


`



