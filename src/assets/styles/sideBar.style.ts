import styled from "styled-components";

export const ContainerSideBar = styled.div`
  padding:15px;
  @media (max-width: 399px) {
    padding: 20px 0px;
  }
`

export const Container = styled.div`
  display: flex;

  @media (max-width: 399px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  width: 350px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.2px;
    height: 100%;
    background-color: #7c04fc;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const SidebarButtonDiv = styled.div`
  width: 200px;
  width: 100%;
  display:none;

  @media (max-width: 400px) {
    display: block;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 399px) {
    padding: 10px;
  }
`;
