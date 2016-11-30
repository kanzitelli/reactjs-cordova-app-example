import React from 'react';

import {
  Page,
  Button
} from 'react-onsenui';

import styled from 'styled-components';

import translate from '../language';

import NavBar from './NavBar';
import ChooseLanguage from '../containers/ChooseLanguage';

import Question1 from './Question1';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
`;

const H1 = styled.h1`
  font-size: 100%;
`;

const IMG = styled.img`
  height: 150px;
  width: 150px;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('language') === undefined) {
      localStorage.setItem('language', 'en');
    }

    this.state = {

    };
  }

  render() {
    return (
      <Page renderToolbar={() => <NavBar title='WELCOME' navigator={this.props.navigator} />}>
        <Wrapper>
          <H1>{ translate('Hello') }!</H1>
          <H1>{ translate('This is Professor Oli') }.</H1>
          <H1>{ translate('He will help you to learn interesing things') }.</H1>
          <IMG src={'http://goo.kiev.ua/s/robert/25.png'} />

          <ChooseLanguage onClick={() => this.forceUpdate() } />

          <Button onClick={ () => this.props.navigator.pushPage({component: Question1, key: `to_q1_${new Date()}`}) }>{ translate('Continue') }</Button>

        </Wrapper>
      </Page>
    );
  }
}

export default MainPage;
