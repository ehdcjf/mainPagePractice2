import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  font: 24px;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;
  color: #464646;
  font-weight: 600;
  text-transform: uppercase;
`;

const NavBar = () => {
  return (
    <StyledNavbar data-scroll-section>
      <div>menu</div>
      <div>president maker</div>
      <div>Login/Join</div>
    </StyledNavbar>
  );
};

export default NavBar;
