import React from 'react';
import { useSelector } from 'react-redux';
import MapList from './MapList';
import styled from 'styled-components';


function WorkingList() {
  
  const todos = useSelector((state) => state.todos);

  return(
    <section>
      <h2>오늘의 할일을 내일로 미루지 맙시다🧡</h2>
        <h1>Working....😄!</h1>
        <ListA>
      {
        todos
        .filter((todos) => !todos.isDone)
        .map((item) => <MapList key={item.id} item={item} />)
      }
        </ListA>
    </section>
  )
}

export default  WorkingList;

const ListA = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;