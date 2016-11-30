import React from 'react';

import {
  Button
} from 'react-onsenui';

import styled from 'styled-components';
import translate from '../language';

const Q_WIDTH = (screen.width - 25) / 2 - 15;

const DIV_RIGHT = styled.div`
  display: inline-block;
  width: ${Q_WIDTH}px;
  margin: 0 auto;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #13bde2;
`;

const DIV_LEFT = styled.div`
  display: inline-block;
  width: ${Q_WIDTH}px;
  margin: 0 auto;
  margin-right: 5px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #13bde2;
`;

class ChooseLanguage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let left = this.props.left;
    let right = this.props.right;
    let onClick = this.props.onClick;

    let LEFT_CONTAINER_CONTENT = this._renderSubjects(left);
    let RIGHT_CONTAINER_CONTENT = this._renderSubjects(right);

    return (
      <div>

        <DIV_LEFT>

          <Button

            onClick={() => {
              onClick('Left');
            }}
            modifier={'quiet'}
          >

            { LEFT_CONTAINER_CONTENT }

          </Button>

        </DIV_LEFT>

        <DIV_RIGHT>

          <Button
            onClick={() => {
              onClick('Right');
            }}
            modifier={'quiet'}
          >

            { RIGHT_CONTAINER_CONTENT }

          </Button>

        </DIV_RIGHT>

      </div>

    );
  }

  // @mark: Render methods

  _renderSubjects(Subjects) {
    return Subjects.map(subject => this._renderImages(subject));
  }

  _renderImages(Subject) {
    let imgs = Subject.images.map(img => this._renderedImageView(img));

    const SPAN = styled.span`
      font-size: 80%;
    `;

    const WR = styled.div`
      width: ${Q_WIDTH - 30}px;
    `;

    return (
      <WR key={Subject.id}>
        <SPAN>{ translate(Subject.name) }</SPAN><br />
        {imgs}
      </WR>
    );
  }

  _renderedImageView(img) {
    const IMG_S = styled.img`
      margin: 3px;
      width: 30%;
      border-radius: 8px;
    `;

    return (
      <IMG_S
        src={img.url}
        key={img.name}
      />
    );
  }

}

export default ChooseLanguage;
