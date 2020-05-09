import React, { Component } from 'react';
import quizQuestions from './data/quizQuestions';
import quizResults from './data/quizResults';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      result: '',
      endResult: '',
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      result: this.state.result + answer
    }));
  }

  setResults () {
    const ans = this.state.result;
    let res = '';
    if (ans === 'aztec nobleman') {
      res = [
        quizResults[0].title,
        quizResults[0].result,
        quizResults[0].img
      ];
    }
    if (ans === 'aztec warrior') {
      res = [
        quizResults[1].title,
        quizResults[1].result,
        quizResults[1].img
      ];
    }
    if (ans === 'aztec commoner') {
      res = [
        quizResults[2].title,
        quizResults[2].result,
        quizResults[2].img
      ];
    }
    if (ans === 'mesopotamian nobleman') {
      res = [
        quizResults[3].title,
        quizResults[3].result,
        quizResults[3].img
      ];
    }
    if (ans === 'mesopotamian warrior') {
      res = [
        quizResults[4].title,
        quizResults[4].result,
        quizResults[4].img
      ];
    }
    if (ans === 'mesopotamian commoner') {
      res = [
        quizResults[5].title,
        quizResults[5].result,
        quizResults[5].img
      ];
    }
    this.setState({ endResult: res });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(), 300);
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result
        quizTitle={this.state.endResult[0]}
        quizResult={this.state.endResult[1]}
        imgSrc={this.state.endResult[2]}
      />
    );
  }

  render() {
    return (
      <div className="react-quiz">
        <div className="react-quiz__header">
          <h1 className="react-quiz__title">Humanities Quiz</h1>
        </div>
        {this.state.endResult ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
