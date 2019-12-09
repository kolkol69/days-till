import React from 'react';
import PropTypes from 'prop-types';
import heartIcon from 'assets/icons/icon_heart.svg';
import Image from 'components/Image';

import { StyledLikeButton } from 'styles/StyledLikeButton';

const LikeButton = ({ active, addToFavorite }) => (
  <StyledLikeButton
    className="like-button"
    onClick={addToFavorite}
    active={active}
  >
    <Image
      src={heartIcon}
      alt="like movie"
    />
  </StyledLikeButton>
);

LikeButton.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
