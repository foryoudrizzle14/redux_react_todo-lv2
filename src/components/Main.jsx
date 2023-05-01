import React from 'react';
import Form from './Form';
import WorkingList from './WorkingList';
import DoneList from './DoneList';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

function Main() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Form />
        <WorkingList />
        <DoneList />
      </Wrap>
    </>
  )
}

export default Main

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;