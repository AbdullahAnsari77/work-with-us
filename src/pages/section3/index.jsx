import "./style.css";
import SecImg from "../../assets/images/Rectangle 4322.png";
import { linksList1, linksList2 } from "../../constant/mock.js";
import Links from "../../component/links";

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
            <div className="links-wrapper">
              <ul>
                {linksList1.map((head, index) => (
                  <Links
                    key={index}
                    image={head.image}
                    titles={head.titles}
                  ></Links>
                ))}
              </ul>

              <ul>
                {linksList2.map((head, index) => (
                  <Links
                    key={index}
                    image={head.image}
                    titles={head.titles}
                  ></Links>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
