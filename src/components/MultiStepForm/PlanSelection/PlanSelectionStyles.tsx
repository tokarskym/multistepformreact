import styled from 'styled-components';


export interface SelectPlanButtonProps {
  isActive?: boolean;
}

export const SelectPlanButton = styled.button<SelectPlanButtonProps>`
  border: 0.5px solid ${(props) => (props.isActive ? props.theme.colors.purplishBlue : props.theme.colors.lightGray)};
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isActive ? props.theme.colors.alabaster : 'transparent')};
  display: flex;
  gap: 20px;
  border-radius: 5px;
  & h3,
  p {
    display: flex;
  }
`;

export const PlanSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MonthlyYearlyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.alabaster};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;

export interface OfferParagraphProps {
  fontSize?: string;
}

export const OfferParagraph = styled.p<OfferParagraphProps>`
  color: ${(props) => props.theme.colors.coolGray};
  font-weight: 500;
  margin-bottom: 5px;
  font-size: ${(props) => props.fontSize || 'inherit'};
`;

export interface OfferHeaderProps {
  fontSize?: string;
}

export const OfferHeader = styled.h3<OfferHeaderProps>`
  color: ${(props) => props.theme.colors.marineBlue};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || '16px'};
  margin-bottom: 5px;
`;

export const OfferExtra = styled.p`
  color: ${(props) => props.theme.colors.purplishBlue};
  font-weight: 500;
  font-size: 12px;
`;
