import React from "react";

import MainMenu from './MainMenu';
import MainContent from './MainContent';
import TheEnd from './TheEnd';

import { useSelector } from 'react-redux';
import { selectIsEnd } from '../redux/endSlice'

const Body: React.FC<{}> = () => {

  const isEnd = useSelector(selectIsEnd)

  // If we're in a special state, display a special page
  // Otherwise display the normal page
  const main = () => {
    if(isEnd) {
      return (
        <TheEnd />
      );
    } else {
      return (
        <div css={bodyStyle} title="Body">
          <MainMenu />
          <MainContent />
        </div>
      );
    }
  }

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'row' as const,
    height: '100%',
  };

  return (
    <React.Fragment>
      {main()}
    </React.Fragment>
  );
};

export default Body;
