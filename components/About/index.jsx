import styled from "styled-components";
import SectionHeader from "../SectionHeader";
const StyledAbout = styled.section`
  p {
    font-size: 70px;
    line-height: 1.12;
    font-family: "East Sea Dokdo", cursive;
  }
`;

const About = () => {
  return (
    <StyledAbout data-scroll-section>
      <SectionHeader title="about" />
      <p>
        대한민국 군대들 지금까지 뭐 했노, 이기 나도 군대 갔다 왔고, 예비군
        훈련까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이
        돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들
        나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고
        "나 국방장관이오!" "나 참모총장이오!" 그렇게 별들 달고
        끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고
        줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까? (박수 소리)
      </p>
    </StyledAbout>
  );
};

export default About;
