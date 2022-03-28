/* This is to wrap containers of the website */

import React from 'react';

// components that will be rendered above/over containers like header, about, ...
import { NavigationDots, SocialMedia } from '../components';

// converted into a higher order component
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        {/* <div className="copyright">
          <p className="p-text">@2022 THÖSAM</p>
          <p className="p-text">All rights reserved</p>
        </div> */}
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
