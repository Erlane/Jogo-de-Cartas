import React, { Component } from 'react';
import styled from "styled-components";
import Image from './assets/image.jpg';

import Card from './Cards';
import Buttons from './Buttons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Image});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin: 2rem 0;

  h1, h2 {
    font-family: monospace;
    text-align: center;
    color: #2E2E2E;
  }
`;

const Content = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ScoreFinish = styled.h2`
  color: #610B0B;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;

  svg {
    color: #610B0Be3;
  }
  .svg-inline--fa.fa-w-16 {
    width: 2em;
  }
  .svg-inline--fa {
    height: 1.5em;
  }
`;

class App extends Component {
    state = {
      cards: ["A", "2", "3", "4", "5","6", "7", "8", "9", "J", "Q", "K"],
      nipes: ["clubs", "hearts", "spades", "diams"],
      baralho: [],
      userCards: [],
      points: 0,
      vencedor: false,
      perdedor: false,
      stop: false
    };

componentDidMount() {
  this.createBaralho();
};

createBaralho = () => {
  const { cards, nipes } = this.state; 

  const baralho = [];

  cards.forEach((card) => {
    nipes.forEach((nipe) => {
      baralho.push({
        label: card,
        value: this.getCardValue(card),
        nipe
      });
    });
  });

  this.setState({
    baralho
  });
};

getCardValue = (card) => {
  if (card === "A") {
    return 1;
  }

  if (card === "J" || card === "Q" || card === "K") {
    return 10;
  }

  return Number(card);
};

getCard = () => {
  const { baralho } = this.state;

  const index = Math.floor(Math.random() * (baralho.length - 1)) + 1;
  
  return baralho[index];
};

newCard = () => {
  const { points } = this.state;
  const card = this.getCard();
  
  const scorePoints = points + card.value;
  
  this.setState({
    userCards: this.state.userCards.concat(card),
    points: this.state.points + card.value
  });

  if (scorePoints > 21) {
    this.setState({perdedor: true});
  }

  if (scorePoints === 21) {
    this.setState({vencedor: true}); 
  }
};

StopGame = () => {
  this.setState({stop: true});
}

newGame = () => {
  this.setState({
    userCards: [],
    points: 0,
    vencedor: false,
    perdedor: false,
    stop: false,
  });
};

render() {
  const { points, userCards, vencedor, perdedor, stop } = this.state;
  
  return (
      <Container>
        <Header>
          <h1>Jogo de Cartas</h1>
          <h2>Vamos ver se você tem sorte...</h2>
        </Header>
          <Content>
            {userCards.map((card) => (
              <Card card={card} />
            ))} 
          </Content>
          <ScoreFinish>Sua pontuação é { points }</ScoreFinish>
        <ContainerButtons>
        {!this.state.vencedor && !this.state.perdedor && !this.state.stop && (
          <Buttons background='green' onClick={this.newCard}>Escolher</Buttons>
        )}
          <Buttons background='purple' onClick={this.StopGame}>Stop</Buttons>
          <Buttons background='red' onClick={this.newGame}>Terminar</Buttons>
        </ContainerButtons>
        {vencedor && <ScoreFinish>Parabénnss! você conseguiu !!!<FontAwesomeIcon icon={faSmileBeam}/></ScoreFinish>}
        {stop && <ScoreFinish>Você finalizou com { points } pontos.</ScoreFinish>}
        {perdedor && <ScoreFinish>Desculpe, mas você perdeu ...</ScoreFinish>}
      </Container>
    );
  }
}

export default App;
