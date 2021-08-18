import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import RequestForm from "../../components/haejwo/RequestForm";
import RequestList from "../../components/haejwo/RequestList";
import { createRequest, showRequest } from "../../components/api/Request";
import styled from "styled-components";

const dateFormet = () => {
  const now = new Date();
  const y = now.getFullYear().toString();
  const m =
    now.getMonth() + 1 > 0
      ? String(now.getMonth() + 1)
      : "0" + String(now.getMonth() + 1);
  const d =
    now.getDate() > 0 ? String(now.getDate()) : "0" + String(now.getDate());
  return `${y}.${m}.${d}`;
};

const StyledWrap = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  width: 70vw;
  height: auto;
  overflow: hidden;
  margin: 0 auto;

  & > h1 {
    font-size: 4.5rem;
    margin: 0 auto;
    text-align: center;
  }
`;

const Post = () => {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [rotate, setRotate] = useState(false);

  ///////////============create
  const addRequest = async (data) => {
    let card = { ...data };
    const result = await createRequest(card);
    if (result.success) {
      card.date = dateFormet();
      card.id = result.data.insertdID;
      card.liked = 0;
      card.isLike = false;
      const newList = [card, ...list];
      setList(newList);
    } else {
      alert(result.error);
    }
  };

  ///////////////=================read
  useEffect(async () => {
    const data = {
      skip: skip,
    };
    const result = await showRequest(data);
    if (result.success) {
      const newList = [...list, ...result.list];
      setList(newList);
      setSkip(skip + 16);
    } else {
      alert(data.error);
    }
  }, []);

  //////==== infinity
  const fetchMoreComment = async () => {
    setFetching(true);
    const data = {
      skip: skip,
    };
    const result = await showRequest(data);
    const newList = [...list, ...result.list];
    setList(newList);
    setSkip(skip + 16);
    setFetching(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      fetching === false &&
      rotate === false
    ) {
      fetchMoreComment();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  ///////////기울이기

  const rotateHandler = (value) => {
    setRotate(value);
  };

  return (
    <>
      <Head>
        <title>해줘</title>
      </Head>
      <StyledWrap>
        <StyledContainer>
          <h1> 개발자에게 '요구' 하세요!</h1>
          {rotate && (
            <RequestForm
              addRequest={addRequest}
              rotateHandler={rotateHandler}
            />
          )}
          {list.length > 0 && (
            <RequestList
              list={list}
              rotate={rotate}
              rotateHandler={rotateHandler}
            />
          )}
        </StyledContainer>
      </StyledWrap>
    </>
  );
};

export default Post;
