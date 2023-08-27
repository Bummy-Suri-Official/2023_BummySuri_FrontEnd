import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const Popup = ({ result, onClose }) => {
    return (
        <PopupContainer>
            <ModalContent>
                <button onClick={onClose}>닫기</button>
            </ModalContent>
        </PopupContainer>
    );
};

export default Popup;
