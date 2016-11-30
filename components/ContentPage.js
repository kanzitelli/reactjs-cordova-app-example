import React from 'react';

import {
  Page,
  Button,
  Toolbar, ToolbarButton,
  Icon,
  List, ListItem,
  Splitter, SplitterSide, SplitterContent,
  Tab, Tabbar
} from 'react-onsenui';

import styled from 'styled-components';

import translate from '../language';

// import NavBar from './NavBarContent';
import MainPage from './MainPage';
import ChooseLanguage from '../containers/ChooseLanguage';

import { getSubject } from '../api';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
`;

const H1 = styled.h1`
  font-size: 100%;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 16px;
`;

class ContentPage extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('language') === undefined) {
      localStorage.setItem('language', 'en');
    }

    let subjId = localStorage.getItem('currentSubjectId') || '1';
    let themeNumber = Number(localStorage.getItem('currentThemeNumber')) || 0;

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this._renderTabs = this._renderTabs.bind(this);
    this._renderContent = this._renderContent.bind(this);
    this._renderToolbar = this._renderToolbar.bind(this);

    this.state = {
      data: getSubject(subjId),
      themeNumber: themeNumber,
      isOpen: false,
      index: 0
    };
  }

  render() {
    let { data } = this.state;

    // console.log(data);

    return (

      <Splitter>
        <SplitterSide
          style={{
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }}
          side='left'
          width={300}
          collapse={true}
          isSwipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          onOpen={this.show.bind(this)}
        >
          <Page>

            <List
              dataSource={data.themes}
              renderRow={(theme, index) => (
                <ListItem key={index} onClick={(e) => { this.hide(); this.changeTheme(index); }} tappable>
                  <div className='left'>
                    <img src={theme.url} className='list__item__thumbnail' />
                  </div>
                  <div className='center' >
                    { translate(theme.name) }
                  </div>
                </ListItem>
              )}
            />

          <Wrapper style={{padding: 5, marginTop: 20}}>
              <Button onClick={ () => { localStorage.removeItem('currentSubjectId'); this.props.navigator.resetPage({ component: MainPage, key: 'MAIN_PAGE' }); }} >{ translate('Change subject') }</Button>
              <P>{ translate('Current choice') }: { translate(data.name) }</P>
              <ChooseLanguage onClick={() => this.forceUpdate() } />
            </Wrapper>

          </Page>
        </SplitterSide>
        <SplitterContent>

          <Tabbar
            index={this.state.index}
            onPreChange={(event) => {
              if (event.index !== this.state.index) {
                this.setState({index: event.index});
              }
            }}
            renderTabs={this._renderTabs}
          />

        </SplitterContent>
      </Splitter>
    );
  }

  // @mark: Handlers

  hide() {
    this.setState({isOpen: false});
  }

  show() {
    this.setState({isOpen: true});
  }

  changeTheme(to) {
    this.setState({themeNumber: to});
  }

  // @mark: Render methods

  _renderToolbar(title) {
    // console.log(title);
    return (
      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={this.show}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>{ translate(title) }</div>
      </Toolbar>
    );
  }

  _renderTabs() {
    let { data, themeNumber } = this.state;
    let Theme = data.themes[themeNumber];
    let t = Theme.tutorials;

    return [
      {
        content: this._renderContent(t.video, 'video', Theme.name),
        tab: <Tab key={1} label={translate('Video')} icon={'md-videocam'} />
      },
      {
        content: this._renderContent(t.text, 'text', Theme.name),
        tab: <Tab key={2} label={translate('Text')} icon={'md-menu'} />
      },
      {
        content: this._renderContent(t.extra, 'extra', Theme.name),
        tab: <Tab key={3} label={translate('Extra')} icon={'md-info'} />
      }
    ];
  }

  _renderContent(t, type, pageTitle) {
    let content;

    switch (type) {
      case 'video':
        content = (<iframe src={t.url} height={screen.height} width={screen.width} key={11}></iframe>);
        break;
      case 'text':
        content = (
          <Wrapper key={12}>
            <H1>{t.title}</H1>
            <P>{t.content}</P>
          </Wrapper>
        );
        break;
      case 'extra':
        content = (
          <Wrapper key={13}>
            <H1>{t.name}</H1>
            <P>{t.content}</P>
          </Wrapper>
        );
        break;
      default:
    }

    return (
      <Page key={type} renderToolbar={() => this._renderToolbar(pageTitle) }>
        { content }
      </Page>
    );
  }

}

// <Page renderToolbar={() => <NavBar title='WELCOME' navigator={this.props.navigator} />}>

export default ContentPage;
