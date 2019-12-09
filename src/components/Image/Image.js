/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { propTypes } from './propTypes';

export default function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Image.propTypes = propTypes;
