export const showRequest = async (data) => {
  const { skip } = data;
  const url = `http://localhost:3002/request/${skip}`;
  const options = {
    methode: "GET",
    mode: "cors",
    credentials: "include",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const createRequest = async (data) => {
  const { name, pw, content } = data;
  let url = "http://localhost:3002/request/";
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      pw,
      content,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const deleteArticle = async (data) => {
  const { id, useridx } = data;
  const url = `http://localhost:3002/request/${id}/${useridx}`;
  const options = {
    method: "delete",
    mode: "cors",
    credentials: "include",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const updateArticle = async (data) => {
  const { subject, body, id } = data;
  let url = `http://localhost:3002/request/${id}`;
  let options = {
    method: "put",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      subject,
      content: body,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

const updateLike = async (data) => {
  const { isLike, board_id } = data;
  let url = "http://localhost:3002/request/like";
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      isLike,
      board_id,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
