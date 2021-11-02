import { useState } from 'react';

import s from './App.module.css';

import FeedbackMenu from './components/Feedback-menu';
import Statistics from './components/Statistics';
import Section from './components/Section/';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ['good', 'neutral', 'bad'];

  function onLeaveFeedback(e) {
    const name = e.target.value;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();

    return Math.round((good / total) * 100) || 0;
  }

  return (
    <div className={s.app}>
      <Section title={'Please leave feedback'}>
        <div className={s.feedbackForm}>
          <FeedbackMenu
            feedbackBtnsOptions={keys}
            onLeaveFeedback={onLeaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </div>
      </Section>
    </div>
  );
}

export default App;
