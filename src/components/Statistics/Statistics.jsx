import { Conatiner, StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, percentage }) => {
  return (
    <Conatiner>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {percentage}%</StatItem>
    </Conatiner>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistic;
