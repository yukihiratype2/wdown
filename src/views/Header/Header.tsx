import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RootState } from 'Store/rootReducer';
import { fullscreenStatus } from 'Store/status/status.action';

const Wrapper = styled.header`
position: fixed;
top: 0;
width: 100%;
height: 23px;
background: transparent;
-webkit-user-select: none;
-webkit-app-region: drag;
text-align: center;
`;

const Title = styled.h4`
margin: 0;
`;

const SHOW = true;
// const HIDDEN = false;
const mapStateToProp = (state: RootState): PropsFromRedux => ({
  fullscreenStatus: state.status.isFullscreen,
});

interface PropsFromRedux {
  fullscreenStatus: fullscreenStatus;
}

type HeaderProps = PropsFromRedux & {
  title: string;
};

const Header = (props: HeaderProps): React.ReactElement => {
  const headerVisible = SHOW;
  if (headerVisible) {
    return (
      <Wrapper>
        {!props.fullscreenStatus && <Title>{props.title}</Title>}
      </Wrapper>
    );
  }
  return <div />;
};

export default connect(mapStateToProp, null)(Header);
