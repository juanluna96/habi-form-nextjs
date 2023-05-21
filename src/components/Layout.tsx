import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        {/* Coloca aquí el encabezado de tu página */}
        Header
      </header>
      <main>{children}</main>
      <footer>
        Footer
        {/* Coloca aquí el pie de página de tu página */}
      </footer>
    </div>
  );
};

export default Layout;