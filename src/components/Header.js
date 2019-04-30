import React from 'react';
import { StyledHeader } from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <h1>
      Movie timer
      <span role="img" aria-label="popcorn">🍿</span>
    </h1>
  </StyledHeader>
);

export default Header;
