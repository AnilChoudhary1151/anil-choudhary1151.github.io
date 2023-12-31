import React from "react";
import styled from "styled-components";

const HeaderAboutUs = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <p>
        We help organizations harness technology & innovation to shape their
        visions, execute their digital transformation journeys, & reinvent their
        business to create exceptional, sustainable value.
      </p>
      <button>See Plans</button>
    </Container>
  );
};

export default HeaderAboutUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    width: 981px;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }
  button {
    width: 220px;
    height: 75px;
    flex-shrink: 0;
    margin-top: 40px;
    border-radius: 60px;
    background: linear-gradient(270deg, #800 0%, #0e1118 100%);
    border: none;
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
