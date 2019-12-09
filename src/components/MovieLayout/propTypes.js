import PropTypes from 'prop-types';

export const propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovieInFavorite: PropTypes.bool,
  addToFavorite: PropTypes.func,
  noTruncate: PropTypes.bool,
};

export const defaultProps = {
  addToFavorite: () => null,
  noTruncate: false,
  isMovieInFavorite: false,
};
