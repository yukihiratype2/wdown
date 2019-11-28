import React from 'react';
import styled from 'styled-components';

import VertResizeBar from './VertResizeBar';

const Wrapper = styled.div`
padding-top: 23px;
height: 100%;
background-color: #66ccff;
min-width: 120px;
position: relative;
`;

const Sidebar = () => (
  <Wrapper>
    <VertResizeBar />
  </Wrapper>
);

export default Sidebar;
