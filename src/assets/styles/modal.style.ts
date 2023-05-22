
import styled from "styled-components";

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: white;
  max-width: 500px;
  height: 600px;
  border-radius: 5px;
  padding: 15px;
  width: 90%;
`;
export const StyledModalOverlay = styled.div`
z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;