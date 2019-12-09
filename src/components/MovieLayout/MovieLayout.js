import React from 'react';
import Countdown from 'react-countdown-now';
import { truncate } from 'utils/utils';
import { propTypes, defaultProps } from './propTypes';

import LikeButton from '../buttons/LikeButton/LikeButton';
import MovieImage from '../MovieImage';

const MovieLayout = ({
  path,
  title,
  date,
  overview,
  isMovieInFavorite,
  addToFavorite,
  noTruncate,
}) => (
  <>
    <MovieImage
      path={path}
      title={title}
    />
    <div>
      <h3 data-testid="movie-title">
        {title}
      </h3>
      <Countdown date={date}>
        <span>
          Already in cinemas
        </span>
      </Countdown>
      <p data-testid="movie-overview">
        {noTruncate ? overview : truncate(overview, 250)}
      </p>
      <LikeButton
        active={isMovieInFavorite}
        addToFavorite={addToFavorite}
      />
    </div>
  </>
);

MovieLayout.propTypes = propTypes;
MovieLayout.defaultProps = defaultProps;

export default MovieLayout;
