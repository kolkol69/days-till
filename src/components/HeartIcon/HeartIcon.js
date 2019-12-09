/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import heartIcon from 'assets/icons/icon_heart.svg';
import { propTypes } from './propTypes';

export default function HeartIcon() {
  return <img src={heartIcon} alt="heart icon" />;
}

HeartIcon.propTypes = propTypes;
