import './Carousel.scss';

import React from 'react';

import denmark from '../../../data/content/factions/img/flag_denmark.png';
import russia from '../../../data/content/factions/img/flag_russia.png';

type Direction = 'prev' | 'next';

const moveToSelected = (direction: Direction) => {
  const hideLeft = document.getElementsByClassName('hideLeft')[0];
  const prevLeftSecond = document.getElementsByClassName('prevLeftSecond')[0];
  const prev = document.getElementsByClassName('prev')[0];
  const selected = document.getElementsByClassName('selected')[0];
  const next = document.getElementsByClassName('next')[0];
  const nextRightSecond = document.getElementsByClassName('nextRightSecond')[0];
  const hideRight = document.getElementsByClassName('hideRight')[0];

  hideLeft.classList.remove('hideLeft');
  prevLeftSecond.classList.remove('prevLeftSecond');
  prev.classList.remove('prev');
  selected.classList.remove('selected');
  next.classList.remove('next');
  nextRightSecond.classList.remove('nextRightSecond');
  hideRight.classList.remove('hideRight');

  if (direction === 'prev') {
    hideLeft.classList.add('prevLeftSecond');
    prevLeftSecond.classList.add('prev');
    prev.classList.add('selected');
    selected.classList.add('next');
    next.classList.add('nextRightSecond');
    nextRightSecond.classList.add('hideRight');
    hideRight.classList.add('hideLeft');
  }
  if (direction == 'next') {
    hideLeft.classList.add('hideRight');
    prevLeftSecond.classList.add('hideLeft');
    prev.classList.add('prevLeftSecond');
    selected.classList.add('prev');
    next.classList.add('selected');
    nextRightSecond.classList.add('next');
    hideRight.classList.add('nextRightSecond');
  }
};

const Carousel: React.FC<{}> = () => (
  <>
    <div id="carousel">
      <div className="hideLeft">
        <img src={russia} alt="" />
      </div>
      <div className="prevLeftSecond">
        <img src={denmark} alt="" />
      </div>
      <div className="prev">
        <img src={russia} alt="" />
      </div>
      <div className="selected">
        <img src={denmark} alt="" />
      </div>
      <div className="next">
        <img src={russia} alt="" />
      </div>
      <div className="nextRightSecond">
        <img src={denmark} alt="" />
      </div>
      <div className="hideRight">
        <img src={russia} alt="" />
      </div>
    </div>
    <div className="buttons">
      <button id="prev" onClick={() => moveToSelected('prev')}>
        Prev
      </button>
      <button id="next" onClick={() => moveToSelected('next')}>
        Next
      </button>
    </div>
  </>
);

export default Carousel;
