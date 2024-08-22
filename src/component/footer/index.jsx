import { ContactUs, PortalLinks, QuickLink } from "../../constant/mock";
import "./style.css";
import Logo from "../../assets/images/Logo.png";
// import facebook from "../../assets/images/footer-facebook.png";
// import Linkdin from "../../assets/images/footer-linkdin.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className="footer-logo" src={Logo} alt="" />
        <div className="row">
          <div className="column-6">
            <h4 className="heading">Contact</h4>

            <ul className="link-list">
              {ContactUs.map((item, index) => (
                <li key={index}>
                  {item?.icons ? (
                    <span>
                      {item?.icons.map((icon, ind) => (
                       <a className="border" href="#" key={ind}> <img src={icon} alt="icon" /></a>
                      ))}
                    </span>
                  ) : (
                    <a href="#">
                      {<img src={item.icon} width={20} alt="" />}
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="column-7">
            <h4 className="heading">Quick links</h4>

            <ul className="link-list">
              {QuickLink.map((item, index) => (
                <li key={index}>
                  <a href="#">{}</a>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="column-7">
            <h4 className="heading">Portal Links</h4>

            <ul className="link-list">
              {PortalLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{}</a>

                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
