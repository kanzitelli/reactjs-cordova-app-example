import React from 'react';

import {
  Page
} from 'react-onsenui';

import styled from 'styled-components';

import translate from '../language';

import NavBar from './NavBar';
import Question3 from './Question3';
import ContentPage from './ContentPage';

import QuestionBlock from '../containers/QuestionBlock';

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

    let d = JSON.parse(localStorage.getItem('currentChoiceData'));

    this.state = {
      data: d
    };
  }

  render() {
    let { data } = this.state;
    let left = [ data[0], data[1] ];
    let right = [ data[2] ];
    if (right[0].id !== '7') right.push(data[3]);

    return (
      <Page renderToolbar={() => <NavBar title='QUESTION 2' navigator={this.props.navigator} />}>
        <Wrapper>
          <H1>{ translate('What do you want to learn') }?</H1>
          <P>{ translate('You just need to press on side you like') }.</P>
          <IMG src={'http://goo.kiev.ua/s/robert/15.png'} />

          <QuestionBlock
            left={left}
            right={right}
            onClick={(value) => {
              if (value === 'Right') {
                // ENGINEERING & TECH
                if (right[0].id === '7') {
                  localStorage.setItem('currentSubjectId', right[0].id);
                  localStorage.setItem('currentThemeNumber', 0);
                  this.props.navigator.resetPage({
                    component: ContentPage,
                    key: 'CONTENT_PAGE'
                  });
                } else {
                  localStorage.setItem('currentChoiceData', JSON.stringify(right));
                  this.props.navigator.pushPage({
                    component: Question3,
                    key: `to_q3_${new Date()}`
                  });
                }
              } else {
                localStorage.setItem('currentChoiceData', JSON.stringify(left));
                this.props.navigator.pushPage({
                  component: Question3,
                  key: `to_q3_${new Date()}`
                });
              }
            }}
          />

        </Wrapper>
      </Page>
    );
  }
}

export default Question1;
