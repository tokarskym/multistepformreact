import styled from 'styled-components';

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 10px;
  border: 1px solid #d6d9e6;

  &:before {
    border-radius: 2px;
    position: absolute;
  }

  &:checked:before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: #483eff;
  }

  &:checked:after {
    border: 1px solid white;
    border-width: 0 2px 2px 0;
    content: '';
    display: block;
    height: 10px;
    transform: rotate(45deg);
    width: 5px;
    margin: 0 auto;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
`;

export const AddOnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
