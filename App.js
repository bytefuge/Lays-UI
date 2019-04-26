import React, { Component } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #F1B11B;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family:'HelveticaNeueBd';
`;
export default class App extends Component {
  render() {
    return (
      <Container >
        <Title>{'Welcome to React Native Lays UI!'}</Title>
      </Container>
    );
  }
}
