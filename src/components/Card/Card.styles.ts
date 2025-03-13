import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #A35BA5;
  border-radius: 16px;
  flex: 1 1 calc(33.33% - 48px);
  width: calc(100% - 88px);
  
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  >a> button {
    color: #ffffff;
    background-color: #A35BA5;
    margin-top: auto;
  }
`;

export const TitleText = styled.h3`
  color: #1e1e1e;
  font-weight: 600;
  font-size: 24px;
`;

export const DescriptionText = styled.p`
  color: #1e1e1e;
  font-weight: 400;
  font-size: 16px;
`;

export const CardIcon = styled.img``;
