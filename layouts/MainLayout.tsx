import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      {/* You can add common layout elements here, like a header or footer */}
      {children}
    </div>
  );
};

export default MainLayout;
