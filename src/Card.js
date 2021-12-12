import React from "react";
import styled from "styled-components";

import { useDrag } from "react-dnd";
import { ItemTypes } from "./utils/items";

const CardContainer = styled.div`
  background-color: orangered;
  color: white;
  font-weight: bold;
  padding: 10px;
  margin: 15px;
  width: 250px;
  opacity: ${(props) => (props.isDragging ? "0.5" : "1")};
`;

const Card = ({ title, details, _id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      id: _id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <CardContainer ref={drag} isDragging={isDragging}>
      <div>{title}</div>
      <div>{details}</div>
    </CardContainer>
  );
};

export default Card;
