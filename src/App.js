import { useState } from "react";
import styled from "styled-components";

import From from "./From";
import Target from "./Target";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [taskList, setTaskList] = useState([
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Chores",
      title: "Buy dog food",
      details: "Gotta make my woof woof happy 🐕",
    },
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Shopping",
      title: "Buy Milk",
      details: "Remember, remember the lactose free aisle... 🥛",
    },
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Chores",
      title: "Renew Gym Membership",
      details: "Gotta keep the muscles happy! 💪🏻",
    },
  ]);

  const markAsDone = (_id) => {
    const task = taskList.filter((task, i) => task._id === _id);
    task[0].status = "done";
    setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
  };

  return (
    <Container>
      <Target taskList={taskList} markAsDone={markAsDone} />
      <From taskList={taskList} />
    </Container>
  );
};

export default App;
