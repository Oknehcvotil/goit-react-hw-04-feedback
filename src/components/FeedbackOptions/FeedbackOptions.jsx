import { BtnContainer, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <Btn type="button" key={option} onClick={() => handleClick(option)}>
            {option}
          </Btn>
        );
      })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
