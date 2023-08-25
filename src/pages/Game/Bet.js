import React from "react";
import styled from 'styled-components';
import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

const Betting = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #1D1D1D;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Bet = ()=> {
    return (
      <Betting>
        <SideBar><SideBarContents/></SideBar>
      </Betting>
    );
  }
  
  export default Bet;

