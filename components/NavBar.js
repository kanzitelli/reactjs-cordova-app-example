import React from 'react';

import {
  Toolbar,
  BackButton
} from 'react-onsenui';

import translate from '../language';

const NavApp = ({title, navigator, backButton}) => (
  <Toolbar>
    <div className='left'>
      {backButton ? <BackButton onClick={() => navigator.popPage()}>{ translate('Back') }</BackButton> : null}
    </div>
    <div className='center'>{ translate(title) }</div>
  </Toolbar>
);

export default NavApp;
