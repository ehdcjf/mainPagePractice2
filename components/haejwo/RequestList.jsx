import RequestItem from "./RequestItem";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";

const StyledList = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transform-origin: ${(props) =>
    props.rotate === "true" ? "50vw 50vh;" : "70vw 70vh"};
  transform: ${(props) =>
    props.rotate === "true"
      ? "perspective(1000px) translate3d(0, -25vh, 0) rotate3d(1, 0, 0, 30deg);"
      : "none"};
`;

const StyledBtn = styled.div`
  width: 70vw;
  height: 50px;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const RequestList = (props) => {
  const list = props.list;
  const rotateHandler = props.rotateHandler;
  const rotate = props.rotate;

  const handleRotate = () => {
    console.log(rotate);
    rotateHandler(true);
  };

  const Item = list.map((v, i) => {
    return (
      <RequestItem
        key={i}
        name={v.name}
        content={v.content}
        date={v.date}
        id={v.id}
        liked={v.liked}
      />
    );
  });
  console.log(rotate.toString());
  return (
    <>
      <StyledBtn>
        {!props.rotate && (
          <span onClick={handleRotate}>
            <BsPencilSquare size={48} />
          </span>
        )}
      </StyledBtn>
      <StyledList rotate={props.rotate.toString()}>{Item}</StyledList>
    </>
  );
};

export default RequestList;
