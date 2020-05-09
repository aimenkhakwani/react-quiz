import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="react-quiz__result">
      {props.quizResult}
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;