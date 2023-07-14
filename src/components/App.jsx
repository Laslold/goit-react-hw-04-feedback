import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { Wrapper } from './App.style';
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = newState => {
    setState(prevState => {
      return {
        ...prevState,
        [newState]: prevState[newState] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = state;
  return (
    <Wrapper>
      <Section title="Please live feedback">
        <FeedbackOptions countFeedback={countFeedback} />
      </Section>
      {}
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Wrapper>
  );
};

export default App;
