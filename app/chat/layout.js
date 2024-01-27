import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="chat-container">
      {children} 
    </div>
  );
};

export default Layout;