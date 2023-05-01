import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

function Detail() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const foundInfo = todos.find((item) => item.id === params.id);
  console.log(foundInfo);

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      {showModal && (
        <ModalWrapper>
          <Modal>
            <InfoDiv>
              <span>ID : {foundInfo.id}</span>
              <Button onClick={closeModal}>이전으로</Button>
            </InfoDiv>
            <div>
              <h1>{foundInfo.title}</h1>
              <p>{foundInfo.content}</p>
            </div>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
}

export default Detail;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 500px;
  height: 200px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
