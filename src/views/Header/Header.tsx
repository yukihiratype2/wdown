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

const Header = () => (
  <Wrapper>header</Wrapper>
);

export default Header;
