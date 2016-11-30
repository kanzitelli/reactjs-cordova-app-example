import React from 'react';

import {
  Page
} from 'react-onsenui';

import styled from 'styled-components';

import translate from '../language';

import NavBar from './NavBar';
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
    let { data, prevChoice } = this.state;
    let left = [ data[0] ];
    let right = [ data[1] ];

    if (prevChoice === 'Right') {
      left = [ data[2] ];
      right = [ data[3] ];
    }

    return (
      <Page renderToolbar={() => <NavBar title='QUESTION 3' navigator={this.props.navigator} />}>
        <Wrapper>
          <H1>{ translate('Last step') }...</H1>
          <P>{ translate('You just need to press on side you like') }.</P>
          <IMG src={'http://goo.kiev.ua/s/robert/4.png'} />

          <QuestionBlock
            left={left}
            right={right}
            onClick={(value) => {
              localStorage.setItem('currentSubjectId', value === 'Right' ? right[0].id : left[0].id);
              localStorage.setItem('currentThemeNumber', 0);
              let cntPage = {
                component: ContentPage,
                key: 'CONTENT_PAGE'
              };
              this.props.navigator.resetPage(cntPage);
            }}
          />

        </Wrapper>
      </Page>
    );
  }
}

export default Question1;
