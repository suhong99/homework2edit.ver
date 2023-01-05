import styled from "styled-components";

const InputBox = styled.div`
  background-color: #eee;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const AddButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 18px;
`;
const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  /* margin-left: 5px; */
`;

const AddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const AddInputNum = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 80px;
`;
function Inputbox(props) {
  return (
    <InputBox>
      <InputGroup>
        <FormLabel>제목 </FormLabel>
        <AddInput
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <FormLabel> 내용</FormLabel>
        <AddInput
          value={props.content}
          onChange={(e) => props.setConTent(e.target.value)}
        />
        <FormLabel> 예상 소요 시간(분)</FormLabel>
        <AddInputNum
          type="number"
          min="0"
          max="500"
          value={props.timecost}
          onChange={(e) => props.setTimeCost(e.target.value)}
        />
      </InputGroup>
      <AddButton onClick={props.addTodoHandler}>추가하기</AddButton>
    </InputBox>
  );
}
export default Inputbox;
