import React from "react";
import styled from "styled-components";
import TeamMembersCard from "./TeamMembersCard";
import Rect17 from '../assets/Rect17.png';
import Rect18 from '../assets/Rect18.png';
import Rect19 from '../assets/Rect19.png';


const data = [
  {
    id: "p1",
    imageUrl: Rect17,
    name: "Kartik Sharma",
    position: "CEO",
  },
  {
    id: "p1",
    imageUrl: Rect18,
    name: "Shreya Palit",
    position: "CEO",
  },
  {
    id: "p1",
    imageUrl: Rect19,
    name: "Shivinder Bahl",
    position: "CEO",
  },
];

const TeamMembers = () => {
  return (
    <Container>
      <Header>
        <div>
          Meet our <span>team</span>
        </div>
        <p>
          Our team of tech strategists, enterprise architects & transformation
          experts help harness technology & innovation as a way to reinvent
          every business.
        </p>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <TeamMembersCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            position={item.position}
          />
        ))}
      </CardsContainer>
      <Eliptical />
      {/* <Eliptical2 /> */}
    </Container>
  );
};

export default TeamMembers;

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    span {
      background: linear-gradient(90deg, #de0000 0%, #6a0000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: #000;
    width: 1213px;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px;
`;

const Eliptical = styled.div`
position :absolute;
  width: 622px;
  height: 622px;
  flex-shrink: 0;
  border-radius: 622px;
  border: 2px dashed #000;
  left:-351px;
  bottom:-467px;
`;
const Eliptical2 = styled.div`
position :absolute;
  width: 622px;
  height: 622px;
  flex-shrink: 0;
  border-radius: 622px;
  border: 2px dashed #000;
  right:-291px;
  top:70px;
  z-index:-99
  
 `;