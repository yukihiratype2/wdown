import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
position: fixed;
top: 0;
width: 100%;
height: 23px;
background:transparent;
-webkit-user-select: none;
-webkit-app-region: drag;
text-align: center;
`;

const SHOW = true;
// const HIDDEN = false;


const Header = () => {
  const headerVisible = SHOW;
  if (headerVisible) {
    return <Wrapper>header</Wrapper>;
  }
  return <div />;
};

export default Header;
