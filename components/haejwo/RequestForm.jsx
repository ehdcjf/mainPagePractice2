import useInput from "../../hooks/useInput";
import styled from "styled-components";

const StyledForm = styled.div`
  width: 50vw;
  height: 50vh;
  margin: 0 auto;

  & > h1 {
    margin: 10px auto;
  }

  & > form > .name {
    display: block;
    width: 10vw;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
  }
  & > form > .pw {
    display: block;
    margin-bottom: 10px;
    width: 10vw;
    height: 20px;
    line-height: 20px;
  }
  & > form > .content {
    display: block;
    font-size: 24px;
    width: 50vw;
    height: 20vh;
  }
`;

const RequestForm = (props) => {
  const addRequest = props.addRequest;
  const rotateHandler = props.rotateHandler;
  const name = useInput("");
  const pw = useInput("");
  const content = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.value === "") {
      return alert("닉네임을 입력해주세요!");
    }
    if (pw.value === "") {
      return alert("비밀번호를 입력해주세요!");
    }
    if (content.value === "") {
      return alert("요구사항을 입력해주세요!");
    }

    const data = {
      name: name.value,
      pw: pw.value,
      content: content.value,
    };
    addRequest(data);
    rotateHandler(false);
  };
  return (
    <StyledForm>
      <h1>요구하기</h1>
      <form onSubmit={handleSubmit}>
        닉네임:
        <input
          className="name"
          type="text"
          {...name}
          placeholder="닉네임을 입력해주세요"
        />
        비밀번호:
        <input
          className="pw"
          type="password"
          {...pw}
          placeholder="비밀번호를 입력해주세요"
        />
        요구내용:
        <input
          className="content"
          type="text"
          {...content}
          placeholder="요구내용을 입력해주세요"
        />
        <button type="submit">"해줘"</button>
        <button
          onClick={() => {
            rotateHandler(false);
          }}
        >
          취소
        </button>
      </form>
    </StyledForm>
  );
};

export default RequestForm;
