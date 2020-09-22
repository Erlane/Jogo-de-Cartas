import React, { Component } from 'react';
import styled from "styled-components";

const Buttons = styled.button`
  background-color: ${props => (props.background ? props.background: 'red')};
  color: #FFFFFF;
  padding: 0.7rem;
  margin-left: 1rem;
  margin-top: 3rem;
  border-radius: 5px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #19181891;
  }
`;

class Button extends Component {

  render() {
    return (
      <>
        <Buttons 
          background={this.props.background} 
          onClick={this.props.onClick}>
          {this.props.children}
        </Buttons>
      </>
    )
  }
}

export default Button;