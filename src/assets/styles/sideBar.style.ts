import styled from "styled-components";

export const ContainerSideBar = styled.div`
  padding: 15px;
  @media (max-width: 1020px) {
    padding: 20px 0px;
  }
`;

export const Container = styled.div`
  display: flex;

  @media (max-width: 720px) {
    display: block;
  }

  @media (max-width: 1020px) {
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

  @media (max-width: 720px) {
    display: none;
  }

  @media (min-width: 401px) and (max-width: 720px) {
    width: 100%;
  }
`;

export const SidebarButtonDiv = styled.div`
  width: 200px;
  display: none;

  @media (max-width: 720px) {
    display: block;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 360px) {
    padding: 10px;
  }

  @media (min-width: 361px) and (max-width: 375px) {
    padding: 10px;
  }
`;
