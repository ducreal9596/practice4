import React from 'react';
import PropTypes from 'prop-types';
import styles from './Music.module.scss';
import classNames from 'classnames/bind';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cl = classNames.bind(styles);
MusicApp.propTypes = {};

function MusicApp(props) {
  const music = useSelector((state) => state.music);
  console.log(music);
  return (
    <div className={cl('wrapper')}>
      <div className={cl('name')}>{music[0].name + ' ' + music[0].author}</div>
      <div className={cl('description')}>
        <audio controls></audio>
      </div>
      <div className={cl('interface')}></div>
    </div>
  );
}

export default MusicApp;
