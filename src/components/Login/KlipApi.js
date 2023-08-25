import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useUserContext } from "./UserAddress";

import { prepare, request } from 'klip-sdk';

const Klipbtn = styled.button`
  width: 236px;
  height: 50px;
  background-color: #C565E7;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 56px;
  margin-bottom: 29px;
  color: #FFFFFF;
`;



const APP_NAME = 'BUMMY and SURI';
const SUCCESSLINK = '/Minting';
const FAILLINK = 'https://www.bummy-suri.com/';

const DEFAULT_ADDRESS = '0x00000000000000000000000000000';


const KlipBtn = () => {
  const { setUserAddress } = useUserContext();

  const prepareAuth = async () => {
    try {
      const prepareResult = await prepare.auth({ bappName: APP_NAME, successLink: SUCCESSLINK, failLink: FAILLINK });
      const requestKey = prepareResult.request_key;
      console.log(requestKey);
      request(requestKey, () => alert('모바일로 접속해랏!'));
      localStorage.setItem('BUMISURI_NFT', requestKey);
    } catch (error) {
      console.log(error, 'error!!!!!!');
      return null;
    }
  };

  return (
    <div>
      <Klipbtn onClick={prepareAuth}>Klip 연동하기</Klipbtn>

    </div>
  );
};

export default KlipBtn;
