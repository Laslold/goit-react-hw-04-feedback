import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Feedback } from './Feedback.styled';
const FeedbackOptions = ({ countFeedback }) => {
  return (
    <Feedback>
      <Button variant="secondary" onClick={() => countFeedback('neutral')}>
        Neutral
      </Button>
      <Button variant="primary" onClick={() => countFeedback('good')}>
        Good
      </Button>
      <Button variant="tertiary" onClick={() => countFeedback('bad')}>
        Bad
      </Button>
    </Feedback>
  );
};
FeedbackOptions.propTypes = {
  countFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
