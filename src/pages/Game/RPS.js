import React, { useState } from "react";
import styled from 'styled-components';
import Logo from '../../components/Logo';
import RpsImage from "../../assets/Game/Rps.png";
import PopupWin from "./RPSWin";
import PopupLose from "./RPSLose";

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

const Background = styled.div`
    max-width: 100%;
    height: 100vh;
    background-color: #1D1D1D;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Image = styled.img`
    width: 281px;
    margin-top: 91px;
`;

const Mychoice = styled.div`
    font-size: 25px;
    font-family: "Pretendard-Bold";
    margin-top: 69px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 22px;
`;

const ChoiceButton = styled.button`
    background-color: ${props => props.isSelected ? "#7000FF" : "#D9D9D9"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#000000"};
    border: none;
    width: 115px;
    height: 40px;
    margin: 0 7px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Pretendard-Bold";
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
`;

const ConfirmButton = styled.button`
    background-color: #D9D9D9;
    color: black;
    border: none;
    width: 224px;
    height: 60px;
    margin-top: 43px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 14px;
    font-family: "Pretendard-Bold";
`;

const MyResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7000FF;
  color: white;
  border: none;
  width: 115px;
  height: 40px;
  margin-top: 43px;
  font-size: 25px;
  border-radius: 10px;
  font-family: "Pretendard-Bold";
`

const RpsResult= styled.div`

`;



const Rps = () => {
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showChoices, setShowChoices] = useState(true);
    const [result, setResult] = useState(null); //결과

    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    }

    const handleConfirmClick = () => {
        if (selectedChoice) {
            setShowChoices(false);

            // 랜덤결과
            const choices = ["가위", "바위", "보"];
            const randomIndex = Math.floor(Math.random() * 3);
            const computerChoice = choices[randomIndex];

            if (
                (selectedChoice === "가위" && computerChoice === "보") ||
                (selectedChoice === "바위" && computerChoice === "가위") ||
                (selectedChoice === "보" && computerChoice === "바위")
            ) {
                setResult(<PopupWin/>);
            } else {
                setResult(<PopupLose/>);
            }         
            
        }
    }

    const handleRestartClick = () => {
      setSelectedChoice(null);
      setShowChoices(true);
      setResult(null);
  }



  return (
    <Background>
        <Logo />
        <SideBar><SideBarContents /></SideBar>
        <Image src={RpsImage} />
        <Mychoice>나의 선택</Mychoice>

        {showChoices && (
            <ButtonContainer>
                <ChoiceButton isSelected={selectedChoice === "가위"} onClick={() => handleChoiceClick("가위")}>가위</ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "바위"} onClick={() => handleChoiceClick("바위")}>바위</ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "보"} onClick={() => handleChoiceClick("보")}>보</ChoiceButton>
            </ButtonContainer>
        )}

        <RpsResult>
            {selectedChoice && !showChoices && (
                <MyResult>{selectedChoice}</MyResult>
            )}
        </RpsResult>

        {showChoices && (
            <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
        )}

        {!showChoices && (
            <>
              {result}
              <ConfirmButton onClick={handleRestartClick} style={{zIndex:"1000"}}>한번 더!</ConfirmButton>
            </>
        )}
    </Background>
    );
}

export default Rps;
