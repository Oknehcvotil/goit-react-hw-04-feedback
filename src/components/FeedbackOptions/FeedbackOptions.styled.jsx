import styled from '@emotion/styled';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #f2f2f2;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 2000ms ease;
  :hover,
  :focus {
    background-color: #ccc;
    color: #fff;
  }
`;
