import Button from "../../component/button";
import "./style.css";

const Section4 = () => {
  return (
    <section className="partner-up">
      <div className="back-img">
        <h3>Partner Up With Swick</h3>

        <div className="partner-button">
          <Button text={"Haul With Us"} />
          <Button text={"Ship with Us"} />
          <Button text={"Agent Program"} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
