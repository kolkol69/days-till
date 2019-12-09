import React from 'react';
import { propTypes } from './propTypes';

export default function Image({ icon, altText }) {
  return <img src={icon} alt={altText} />;
}

Image.propTypes = propTypes;
