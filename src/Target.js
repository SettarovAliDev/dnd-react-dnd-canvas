import React from "react";
import styled from "styled-components";

import { useDrop } from "react-dnd";
import { ItemTypes } from "./utils/items";

import Card from "./Card";

const TargetContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  min-height: 100px;
  background-color: ${(props) => (props.isOver ? "green" : "#eee")};
  padding: 20px;
  margin: 20px;
`;

const Target = ({ taskList, markAsDone }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => markAsDone(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <TargetContainer ref={drop} isOver={isOver}>
      {taskList
        .filter((task) => task.status === "done")
        .map((task) => (
          <Card
            key={task._id.toString()}
            _id={task._id}
            category={task.category}
            title={task.title}
            details={task.details}
          />
        ))}
    </TargetContainer>
  );
};

export default Target;
