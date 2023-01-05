import styled from "styled-components";

const TodoButton = styled.button`
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

function CustomButton(props) {
  const { color, onClick, children } = props; //순서가 중요할까?
  if (color) {
    return (
      <TodoButton
        className="todo-button"
        style={{
          borderColor: color,
          borderStyle: "solid",
        }}
        onClick={onClick}
      >
        {children}
      </TodoButton>
    );
  }
  return <button onClick={onClick}>(children)</button>;
}

export default CustomButton; // 외부에 쓰는 코드
