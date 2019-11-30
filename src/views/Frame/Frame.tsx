import React from 'react';
import styled from 'styled-components';

import Sidebar from 'Views/Sidebar/Sidebar';
import Header from 'Views/Header/Header';
import Workbench from 'Views/Workbench/Workbench';

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

const Frame = () => (
  <Wrapper>
    <Header />
    <Sidebar />
    <Workbench />
  </Wrapper>
);

export default Frame;
