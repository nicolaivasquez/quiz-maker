import React from 'react';

export const Question = ({question, handleSelectChoice}) => {
  return (
    <div className="Question">
      <p>{ question.text }</p>
      <ul className="Question-choices">
      { question.choices.map((choice) =>
        <li key={ choice.id }>
          <input
            type="radio"
            checked={question.selected === choice.id}
            onChange={() => handleSelectChoice(question.id, choice.id)}
          />
          { choice.answer }
        </li>
      )}
      </ul>
    </div>
  );
};
