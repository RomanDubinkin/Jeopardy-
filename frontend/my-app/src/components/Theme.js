import React from "react";
import Header from './Header';
import Question from './Question';

const Theme = ({ theme }) => {
  return (
    <div>
      <Header title={title} />
      <div>
        <ol>
          {status.map((el, i) => (
            <Question title={title} price={200 * (1 + i)} state={el} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Theme;