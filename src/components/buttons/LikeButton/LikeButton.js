import React from 'react';
import PropTypes from 'prop-types';
import HeartIcon from 'components/HeartIcon';

import { StyledLikeButton } from 'styles/StyledLikeButton';

const LikeButton = ({ active, addToFavorite }) => (
  <StyledLikeButton
    className="like-button"
    onClick={addToFavorite}
    active={active}
  >
    <HeartIcon />
  </StyledLikeButton>
);

LikeButton.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
