import styled from "styled-components";

export const Button = styled.button`
  background-color: #f0f0f0;
  color: #7c04fc;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const CircleButton = styled.button`
  border: none;
  background-color: #f0f0f0;
  color: #888;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    background-color: #dcdcdc;
  }
`;
