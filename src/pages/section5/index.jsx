import LinkImg from "../../assets/images/dumper icon.png";
import LinkImgA from "../../assets/images/radio icon.png";
import LinkImgB from "../../assets/images/dumper weight.png";
import LinkImgC from "../../assets/images/customer service truck.png";
import "./style.css";

function Section5() {
  return (
    <section className="solution">
      <div className="container">
        <h2>Solutions</h2>
        <div className="row">
          <div className="column-5">
            <a href="#">
              <img src={LinkImg} alt="" className="link-img-a" />
            </a>
            <p>Full Truckload</p>
          </div>
          <div className="column-5">
            <a href="#">
              <img src={LinkImgA} alt="" className="link-img-b" />
            </a>
            <p>Refrigerated (Reefer)</p>
          </div>
          <div className="column-5">
            <a href="#">
              <img src={LinkImgB} alt="" className="link-img-c" />
            </a>
            <p>Flatbed</p>
          </div>
          <div className="column-5">
            <a href="#">
              <img src={LinkImgC} alt="" className="link-img-d" />
            </a>
            <p>Expedited</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
