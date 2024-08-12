import "./style.css";
import SecImg from "../../assets/images/Rectangle 4322.png";
import StokeImg from "../../assets/images/Stroke 3.png"
const Section3 = () => {
  return (
    <section className="partnering">
      <div className="container">
        <div className="row">
          <div className="column-2">
            <img src={SecImg} alt="" />
          </div>
          <div className="column-3">
            <h2>Benefits of Partnering With Swick</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. when an unknown printer took a galley.
            </p>
            <div className="link">
              <ul>
                <li><a href="#"><img src={StokeImg} alt="" />Extensive Capacity</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />Competitive Rates</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />Dedicated Pricing Analyst</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />End-to-end Visibility</a></li>
                </ul>
                <ul>
                <li><a href="#"><img src={StokeImg} alt="" />Modern, Reliable Equipment</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />24/7 Coverage & Support</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />Custom Solutions</a></li>
                <li><a href="#"><img src={StokeImg} alt="" />Client Focused Process</a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
