import { Thumb } from './Statistics.styles';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Thumb>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {good && positivePercentage()}%</p>
    </Thumb>
  );
}

export default Statistics;
