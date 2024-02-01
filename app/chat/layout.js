import StickyNavBar from "@/components/custom/navigation/sticky-nav-bar";
const Layout = ({ children }) => {
  return (
    <div className="chat-container">
      <StickyNavBar/>
      {children}
    </div>
  );
};

export default Layout;