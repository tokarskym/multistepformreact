import styled from 'styled-components';

export const SummaryDiv = styled.div`
  background-color: ${(props) => props.theme.colors.alabaster};
  padding: 20px;
  margin-bottom: 20px;
`;
export const TotalDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const ChangePlanButton = styled.button`
  text-decoration: underline;
  border: none;
  color: ${(props) => props.theme.colors.coolGray};
  background: transparent;
  padding: 0;
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  margin: 10px auto;
  border: 0.1px solid ${(props) => props.theme.colors.coolGray};
`;

export const TotalPrice = styled.h1`
  color: ${(props) => props.theme.colors.purplishBlue};
  font-size: 16px;
  font-weight: 700;
`;
