import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
width: 5px;
height: 100%;
background: transparent;
position: absolute;
top: 0;
left: calc(100% - 3px);
cursor: col-resize;
`;

const VertResizeBar = () => (
  <Bar />
);

export default VertResizeBar;
