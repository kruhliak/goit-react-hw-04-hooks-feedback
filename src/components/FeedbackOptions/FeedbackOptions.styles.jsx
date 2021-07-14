import styled from '@emotion/styled';

export const Button = styled.button`
  border: 1px solid #000;
  border-radius: 4px;

  :not(:last-child) {
    margin-right: 10px;
  }
  :last-child {
    background-color: #f58484;
    &:hover,
    :focus {
      background-color: #eb4c4c;
    }
  }
  :first-of-type {
    background-color: #a4eea4;
    &:hover,
    :focus {
      background-color: #5af05a;
    }
  }
  :not(:last-child, :first-of-type) {
    background-color: #f0f092;
    &:hover,
    :focus {
      background-color: #f3f34b;
    }
  }
`;
