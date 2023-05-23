import React from "react";
import ParticleBackground from "./particles/ParticleBackground";
import {
  BodyContainer,
  FontFamilyContainer,
  FormCardContainer,
  MiddleCard,
} from "@/assets/styles/formCard.style";

interface LayoutProps {
  children: React.ReactNode;
  error: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, error = false }) => {
  return (
    <FontFamilyContainer>
      <div id="modal-root"></div>
      <BodyContainer>
        <div style={{ position: "absolute" }}>
          <ParticleBackground error={error} />
        </div>
        <MiddleCard>
          <FormCardContainer>
            <main>{children}</main>
          </FormCardContainer>
        </MiddleCard>
      </BodyContainer>
    </FontFamilyContainer>
  );
};

export default Layout;
