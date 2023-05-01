import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusTodo, deleteTodo } from './modules/todos';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function MapList({ item }) {
  // useDispatch로 액션 객체 리듀서로 보내기
  const dispatch = useDispatch();

  // 완료 or 취소 버튼 onClick
  const onToggleBtnClick = (id) => dispatch(toggleStatusTodo(id));
  // 삭제 버튼 onClick
  const onDeleteBtnClick = (id) => dispatch(deleteTodo(id));

  
  return (
    <Todo key={item.id}>
      <Link to={`${item.id}`}>
      <LinkP>상세보기</LinkP>
      </Link>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <TodoBtnArea>
        <TodoDeleteBtn
          onClick={() => onDeleteBtnClick(item.id)}
        >
          삭제하기
        </TodoDeleteBtn>
        <TodoCheckBtn
          onClick={() => onToggleBtnClick(item.id)}
        >
          {!item.isDone ? '완료' : '취소'}
        </TodoCheckBtn>
      </TodoBtnArea>
    </Todo>
  )
}

export default MapList

const Todo = styled.div`
  width: 282px;
  padding: 15px 23px;
  border: 2px solid #ffa8a8;
  border-radius: 10px;
`;

const LinkP = styled.p`
  font-size: 12px;
  font-weight: 100;
  font-color: yellow;
`;

const TodoBtnArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const TodoDeleteBtn = styled.button`
  width: 110px;
  border: 5px solid #fc5d8f;
  background-color: #fc5d8f;
`;

const TodoCheckBtn = styled.button`
  width: 110px;
  border: 5px solid #8fd1f7;
  background-color: #8fd1f7;
`;

