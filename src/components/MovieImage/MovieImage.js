import React from 'react';
import Image from 'components/Image';
import NotFoundImage from 'assets/images/movie_not_found.jpg';
import { createImageLink } from 'utils/utils';
import { propTypes, defaultProps } from './propTypes';

const MovieImage = ({ path, title }) => {
  const renderImage = path ? (
    <Image src={createImageLink(path)} alt={title} />
  ) : (
    <Image src={NotFoundImage} alt="not found" />
  );

  return renderImage;
};

MovieImage.propTypes = propTypes;
MovieImage.defaultProps = defaultProps;

export default MovieImage;
