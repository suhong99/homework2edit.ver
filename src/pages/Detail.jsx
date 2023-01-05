import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DtBox = styled.div`
  margin: 200px auto;
  padding: 0 24px;
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 20px;
`;

const DtConHead = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const GoBack = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const DetailTitle = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

function Detail() {
  const param = useParams();
  const todolist = useSelector((state) => state.todos.todolist);
  const navigate = useNavigate();
  const detail = todolist.find((detail) => detail.id === param.id); //use param 을 잘 모르는듯.
  const goToMain = () => {
    navigate("/");
  };
  return (
    <DtBox>
      <DtConHead>
        <div> ID : {detail.id}</div>

        <GoBack onClick={goToMain}> 이전으로 </GoBack>
      </DtConHead>

      <DetailTitle>{detail.title}</DetailTitle>
      <div>{detail.content}</div>
    </DtBox>
  );
}

export default Detail;
