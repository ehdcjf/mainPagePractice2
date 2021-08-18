import styled from "styled-components";

import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const StyledItem = styled.ul`
  width: 18.75rem;
  box-sizing: border-box;
  height: 12.5rem;
  padding: 0.625rem;
  margin: 0.625rem;
  border: 1px solid #1bd2f0;
  border-radius: 5px;

  & > .head {
    width: 100%;
  }

  & > .head > .name {
    font-size: 1rem;
    font-weight: 500;
  }

  & > .head > .date {
    float: right;
    font-size: 1rem;
    font-weight: 500;
  }

  & > .content {
    width: 100%;
    min-height: 8.25rem;
    font-size: 1.5rem;
    font-weight: 800;
  }

  & > .action {
    width: 100%;
    text-align: right;
  }

  & > .action > span {
    margin-right: 0.625rem;
  }
`;

const RequestItem = (props) => {
  const likeHandler = () => {};
  return (
    <StyledItem>
      <li className="head">
        <span className="name">{props.name}님의 '해줘'</span>
        <span className="date">{props.date}</span>
      </li>
      <li className="content">{props.content}</li>

      <li className="action">
        <span>
          {props.isLike === true ? (
            <span>
              <FcLike
                onClikc={() => {
                  likeHandler(false);
                }}
              />
            </span>
          ) : (
            <span>
              <FcLikePlaceholder
                onClick={() => {
                  likeHandler(true);
                }}
              />
            </span>
          )}
          {props.liked}
        </span>
        <span>
          <GrUpdate size={16} />
        </span>
        <span>
          <RiDeleteBin6Line size={16} />
        </span>
      </li>
    </StyledItem>
  );
};

export default RequestItem;
