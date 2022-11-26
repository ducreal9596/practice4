import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReactClicker.module.scss';
import classNames from 'classnames/bind';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import reactClickerSlice from './ReactClickerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
const cl = classNames.bind(styles);

ReactClicker.propTypes = {};

function ReactClicker(props) {
  const disPatch = useDispatch();
  const counter = useSelector((state) => state.reactClicker);
  const handleIncrease = () => {
    disPatch(reactClickerSlice.actions.increase(1));
  };
  const handleDecrease = () => {
    disPatch(reactClickerSlice.actions.decrease(1));
  };
  const handleReset = () => {
    disPatch(reactClickerSlice.actions.resetCounter(0));
  };
  return (
    <div className={cl('wrapper')}>
      <header className={cl('header')}>
        <FontAwesomeIcon icon={faHand} />
        React Clicker
      </header>
      <div className={cl('content')}>
        <div className={cl('counters')}>{counter}</div>
        <div className={cl('action')}>
          <div className={cl('action-btn')}>
            <Button increase onHandle={handleIncrease}>
              +
            </Button>
          </div>
          <div className={cl('action-btn')}>
            <Button reset onHandle={handleReset}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </Button>
          </div>
          <div className={cl('action-btn')}>
            <Button decrease onHandle={handleDecrease}>
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactClicker;
