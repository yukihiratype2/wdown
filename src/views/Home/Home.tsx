import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
background-color: red;
`;

const Button = styled.button`
color: green;
`;

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Button onClick={() => setCount(count + 1)}>lickk</Button>
      {count}
    </Wrapper>
  );
};

export default Home;
