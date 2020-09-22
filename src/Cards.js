import React, { Component } from 'react';
import styled from "styled-components";


const SubCards = styled.div`
  width: 170px;
  height: 255px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #FFF;
  color: ${props => (props.color === 'hearts' || props.color === 'diams'  ? 'red' : 'black')};
  margin: 0 0.4rem;
  position: relative;
`;

const Cards = styled.div` 
  font-size: 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TopValue = styled.span`
  font-size: 1.8rem;
  position: absolute;
  top: 1%;
  left: 3%;
`;

const BottomValue = styled.span`
  font-size: 1.8rem;
  position: absolute;
  bottom: 1%;
  right: 3%;
  transform: rotate(180deg);
`;

class Card extends Component {
  chooseSuit = (suit) => {
    console.log('suit', suit);
    switch (suit) {
      case "clubs":
        return "♣";
      case "hearts":
        return "♥";
      case "spades":
        return "♠";
      case "diams":
        return "♦";
      default:
        return "";
    }
  };

  render() {
    const { card } = this.props;

    return (
      <>
        <SubCards color={card.nipe}>
          <TopValue>{card.label}</TopValue>
            <BottomValue>{card.label}</BottomValue>
          <Cards>
            {this.chooseSuit(card.nipe)}
          </Cards>
        </SubCards>
     </>
    );
  }
}

export default Card;
