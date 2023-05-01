import React from 'react';
import { useSelector } from 'react-redux';
import MapList from './MapList';
import styled from 'styled-components';

function DoneList() {
  // useSelector 전역 state 가져오기
  const todos = useSelector((state) => state.todos);

  return (
    <section>
      <h1>Done....🎉!!</h1>
      <ListSec>
      {
        todos
        .filter((todos) => todos.isDone)
        .map((item) => <MapList key={item.id} item={item} />)
      }
      </ListSec>
    </section>
  )
}

export default DoneList;

const ListSec = styled.div`
  display: flex;
  gap: 10px;
`;