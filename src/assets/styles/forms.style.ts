import { ErrorMessage } from "formik";
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
font-size: 1rem;
  margin-bottom: 5px;
  display: block;
  color: #888;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 280px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px;
  display: flex;
  align-items: center;
  
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #7c04fc;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    /* Estilo de fondo cuando el checkbox está marcado */
    background-color: #7c04fc;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 0;
    left: 3px;
    width: 4px;
    height: 8px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
`;

export const SubmitButton = styled.button`
  background-color: #7c04fc;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;

  &:hover {
    background-color: #5e02cc;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;
