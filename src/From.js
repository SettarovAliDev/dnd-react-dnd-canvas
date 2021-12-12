import React from "react";
import styled from "styled-components";
import Card from "./Card";

const FromContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #c4c4;
  padding: 20px;
  margin: 20px;
  min-height: 100px;
`;

const From = ({ taskList }) => {
  return (
    <FromContainer>
      {taskList
        .filter((task) => task.status === "wip")
        .map((task) => (
          <Card
            key={task._id.toString()}
            _id={task._id}
            category={task.category}
            title={task.title}
            details={task.details}
          />
        ))}
    </FromContainer>
  );
};

export default From;
