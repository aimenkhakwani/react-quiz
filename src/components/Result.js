import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="react-quiz__result">
      <h2 className="react-quiz__result-title">{props.quizTitle}</h2>
      {props.quizResult}
      <div className="react-quiz__result-img">
        <img src={require(`../assets/${props.imgSrc}`)} className="react-quiz__img" alt="alt text" />
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  quizTitle: PropTypes.string.isRequired
};

export default Result;