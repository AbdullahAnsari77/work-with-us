import "./style.css";
import IconCalls from "../../assets/images/call icon.png";
import IconCall from "../../assets/images/message icon.png";
import LinkCall from "../../assets/images/bag icon.png";
import LinkCalls from "../../assets/images/profile icon.png";
import HeadLink from "../../assets/images/linkdin icon header.png";
import HeadLinks from "../../assets/images//facebook icon header.png";
import MenuImg from "../../assets/images/Logo.png";
import Button from "../button";
import { MenuLink } from "../../constant/mock";

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="icon-list">
                <li>
                  <a className="bold" href="#">
                    <img src={IconCalls} alt="" />
                    +1 312 -724 - 7179
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={IconCall} alt="" />
                    sales@swicklogistics.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul className="icon-list">
                <li>
                  <a href="#">
                    <img src={LinkCall} alt="" />
                    Carrier Portal
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={LinkCalls} alt="" />
                    Customer Portal
                  </a>
                </li>
              </ul>
              <ul className="icon-box">
                <li className="icon-link">
                  <a href="#">
                    <img src={HeadLink} alt="" />
                  </a>
                </li>
                <li className="icon-link">
                  <a href="#">
                    <img src={HeadLinks} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="mobile-menu">
        <div className="navbar">
          <div className="container">
            <div className="row">
              <div className="menu">
                <img src={MenuImg} alt="" />
              </div>
              <a href="#" className="hamburger-wrapper">
                <div className="hamburger-menu"></div>
              </a>
              <div className="mobile-menu-overlay">
                <div className="menu-link">
                  <ul>
                    {MenuLink.map((item, index) => (
                      <li key={index}>
                        <a href="#">{}</a>
                        <a href="#">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="quote">
                  <Button text={"get a quote"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
