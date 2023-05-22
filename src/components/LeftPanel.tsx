import React, { useState } from "react";
import SummaryForm from "./forms/SummaryForm";
import Modal from "./Modal";
import { AiFillEye } from "react-icons/ai";
import {
  ContainerSideBar,
  Content,
  Sidebar,
  SidebarButtonDiv,
} from "@/assets/styles/sideBar.style";
import { Button } from "@/assets/styles/buttons.style";

const LeftPanel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ContainerSideBar>
      <SidebarButtonDiv>
        <Button onClick={() => setShowModal(true)}>
          <AiFillEye size={21} style={{ marginRight: "2px" }} /> Ver resumen
        </Button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <SummaryForm sideBar={true} />
        </Modal>
      </SidebarButtonDiv>
      <Sidebar>
        <Content>
          <SummaryForm sideBar={true} />
        </Content>
      </Sidebar>
    </ContainerSideBar>
  );
};

export default LeftPanel;
