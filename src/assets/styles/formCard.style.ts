import styled from "styled-components";

export const FontFamilyContainer = styled.div`
  font-family: "Montserrat", sans-serif;
`;

export const BodyContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const MiddleCard = styled.div`
  position: relative;
  @media (max-width: 360px) {
    width: 100%;
  }
  @media (min-width: 361px) and (max-width: 375px) {
    width: 100%;
  }
  @media (min-width: 376px) and (max-width: 720px) {
    width: 100%;
  }
`;

export const FormCardContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #eaeaea;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 360px) {
    padding: 20px 15px;
  }
`;

export const FormCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormCardRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const FormCardLabel = styled.label`
  flex: 0 0 150px;
  font-weight: bold;
`;

export const FormCardInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormCardCheckbox = styled.input`
  margin-right: 10px;
`;

export const FormCardButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #eaeaea;
    cursor: not-allowed;
  }
`;

export const ContainerSteps = styled.div`
  width: inherit;
  margin-right: 10px;

  @media (max-width: 720px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    margin-right: 0px;
  }

  @media (min-width: 361px) and (max-width: 375px) {
    margin-right: 0px;
  }

  @media (min-width: 376px) and (max-width: 720px) {
    margin-right: 0px;
  }
`;
