import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
