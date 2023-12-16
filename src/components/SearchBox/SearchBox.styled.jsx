import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 13px 20px;
  width: 300px;
  border-radius: 4px;
  font-size: 18px;
  color: #300a89;
  border: 1px solid white;
  background-color: #ffffff;
  :focus {
    box-shadow: 0px 0px 0px 1px white;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;
  font-weight: 700;
  font-size: 22px;
  border-radius: 4px;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  color: #300a89;
  background-color: transparent;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus-visible {
    color: white;
    background-color: #300a89;
  }
  :focus {
    box-shadow: 0px 0px 0px 1px white;
  }
`;
