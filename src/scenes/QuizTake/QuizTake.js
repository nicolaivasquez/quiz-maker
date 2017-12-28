import React, { Component } from 'react';
import Question from './components/Question';

import * as util from './utility';

const sampleQuiz = require('./sampleQuiz');
const loadQuiz = () => Promise.resolve(sampleQuiz);

class QuizTake extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quiz: null,
    }
  }

  componentDidMount() {
    loadQuiz()
      .then((quiz) => {
        this.setState({
          quiz: util.initialQuizState(quiz),
        });
      });
  }

  handleSelectChoice(questionId, choice) {
    this.setState((state) => ({
      ...state,
      quiz: {
        ...state.quiz,
        questions: state.quiz.questions.map((question) => {
          if (question.id !== questionId) {
            return question;
          }
          return {
            ...question,
            selected: choice,
          }
        })
      }
    }))
  }

  render() {
    const quiz = this.state.quiz;

    return (
      <div className="QuizTake">
      {quiz !== null &&
        <div>
          <h3>{quiz.name}</h3>
          <div className="QuizTake_questions">
          {quiz.questions.map((question) =>
            <Question
              key={question.id}
              question={question}
              handleSelectChoice={this.handleSelectChoice.bind(this)}
            />
          )
          }
          </div>
        </div>
      }
      </div>
    );
  }

}

export default QuizTake;
