const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
