import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './modules/todos';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

function Form() {
 
  const dispatch = useDispatch();
 
  // useState
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 제목, 내용 onChange
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  // 추가하기 버튼 onClick
  const onAddBtnClick = (e) => {
    e.preventDefault();
    if(title === '' || content === '') {
      alert('입력하세요!');
      return;
    }
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setContent('');
  };

  return (
    <Section>
      <FormA>
        <Label htmlFor="form-title">
          제목
          <Input 
            type="text"
            id="form-title"
            value={title}
            onChange={onTitleChange}
          />
        </Label>
        <Label htmlFor="form-content">
          내용
          <Input
            type="text"
            id="form-content"
            value={content}
            onChange={onContentChange}
          />
        </Label>
        <FormButton
          onClick={onAddBtnClick}
        >
          추가하기
        </FormButton>
      </FormA>
    </Section>
  )
}

export default Form


const Section = styled.section`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: #9dc1fa;
  border-radius: 10px;
`;

const FormA = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;
  border: none;
  border-radius: 10px;
`;

const FormButton = styled.button`
  border: none;
  float: right;
  background-color: #060938;
  color: #effad8;
`;