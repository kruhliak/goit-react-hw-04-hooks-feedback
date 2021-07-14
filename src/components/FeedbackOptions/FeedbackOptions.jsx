import { Button } from './FeedbackOptions.styles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(name => (
        <Button type="button" key={name} name={name} onClick={onLeaveFeedback}>
          {name.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
