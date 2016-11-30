import React from 'react';

import {
  Switch
} from 'react-onsenui';

import styled from 'styled-components';
import translate from '../language';

const P = styled.p`
  font-size: 14px;
`;

const SPAN = styled.span`
  font-size: 12px;
  margin: 0 10px;
`;

class ChooseLanguage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem('language')
    };
  }

  render() {
    return (

      <div style={{margin: 40}}>

        <P>{ translate('Please, choose your language') }:</P>

        <SPAN>{ translate('EnglishL') }</SPAN>
        <Switch
          checked={this.state.language === 'ru'}
          onChange={(e) => {
            let l = e.target.checked ? 'ru' : 'en';
            localStorage.setItem('language', l);
            this.setState({ language: l });
            this.props.onClick();
          }}
        />
        <SPAN>{ translate('Russian') }</SPAN>

      </div>

    );
  }

}

export default ChooseLanguage;
