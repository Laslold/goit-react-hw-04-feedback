import PropTypes from "prop-types";
import { StatisticStyled } from "./Statistic.styled";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticStyled>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>
        Positive feedback:
        {positivePercentage > 50 ? (
          <span style={{ color: "red", fontSize: "24px" }}>
            {positivePercentage}
          </span>
        ) : (
          <span> {positivePercentage}</span>
        )}
        %
      </h3>
    </StatisticStyled>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;