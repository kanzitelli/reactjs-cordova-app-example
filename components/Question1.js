import React from 'react';

import {
  Page
} from 'react-onsenui';

import styled from 'styled-components';

import translate from '../language';

import NavBar from './NavBar';
import Question2 from './Question2';

import QuestionBlock from '../containers/QuestionBlock';

import { getInitData } from '../api';

const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #fff;
`;

const H1 = styled.h1`
  font-size: 100%;
`;

const IMG = styled.img`
  height: 100px;
  width: 100px;
`;

const P = styled.p`
  font-size: 14px;
`;

class Question1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitData()
    };
  }

  render() {
    return (
      <Page renderToolbar={() => <NavBar title='QUESTION 1' navigator={this.props.navigator} />}>
        <Wrapper>
          <H1>{ translate('What do you prefer') }?</H1>
          <P>{ translate('You just need to press on side you like') }.</P>
          <IMG src={'http://goo.kiev.ua/s/robert/6.png'} />

          <QuestionBlock
            left={this.state.data.Left}
            right={this.state.data.Right}
            onClick={(value) => {
              let dataToSet = value === 'Right' ? this.state.data.Right : this.state.data.Left;
              localStorage.setItem('currentChoiceData', JSON.stringify(dataToSet));
              this.props.navigator.pushPage({
                component: Question2,
                key: `to_q2_${new Date()}`
              });
            }}
          />

        </Wrapper>
      </Page>
    );
  }
}

export default Question1;
