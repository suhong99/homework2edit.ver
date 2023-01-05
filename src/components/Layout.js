import { useSelector } from "react-redux";
import styled from "styled-components";
const AppLayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  width: 100%;
  gap: 12px;
`;
const WorkTime = styled.div`
  font-weight: bold;
  font-size: large;
`;
const LayoutHeader = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
function Layout(props) {
  const totalcost = useSelector((state) => state.timecost.timecost);
  // const totalcost = useSelector((state) => state.todos.totaltime);

  // console.log(props + ": props");
  // console.log(props.children + ": props.children");
  const { children } = props;

  return (
    <AppLayout>
      <LayoutHeader>
        <div>My Todo list</div>
        <WorkTime> ⭐학습시간 : {totalcost}분⭐</WorkTime>
        <div>React</div>
      </LayoutHeader>
      {children}
    </AppLayout>
  );
}
export default Layout;
