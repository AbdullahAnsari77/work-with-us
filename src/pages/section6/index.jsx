import "./style.css";
import Card from "../../component/card";
import { Box } from "../../constant/mock.js";

const Section6 = () => {
  return (
    <section className="industries">
      <div className="back-images">
        <div className="container">
          <h4 className="head">Industries</h4>
          <h2 className="sec-head">Fields We Operate In</h2>
          <p className="para">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="row">
            {Box.map((ali, index) => (
            <Card
            key={index}
            image={ali.image}
            title={ali.title}
            description={ali.description} />

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
