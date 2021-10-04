import React, { useState } from "react";
function Sidebar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const styles = {
    divClass:
      "bg-blue-400 w-48 h-screen fixed left-0 top-14 pb-14 transition duration-500",
  };
  return (
    <div
      className={`${styles.divClass} ${
        menu ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    ></div>
  );
}

export default Sidebar;
