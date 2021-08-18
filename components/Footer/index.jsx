import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const StyledFooter = styled.section`
  text-align: center;
  padding-bottom: 200px;

  .location {
    font-size: 15vw;
    text-transform: uppercase;
    font-family: "Bodoni Moda", serif;
  }
`;
const Footer = () => {
  return (
    <StyledFooter data-scroll-section>
      <SectionHeader title="Made in" />
      <h1 className="location" id="location-text">
        Who is Next
      </h1>
    </StyledFooter>
  );
};

export default Footer;
