import "./style.css";
// import Card from "../../component/card"
// import VectorImg from '../../assets/images/Vector (9).png'
import Card from "../../component/card";
import { box } from "../../component/constant/mock";

const Section6 = () => {
  return (
    <section className="industries">
<div className="back-images">
  <div className="container">
    <h4 className="head">Industries</h4>
    <h2 className="sec-head">Fields We Operate In</h2>
    <p className="para">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  <div className="row">
    {box.map((ali,index)=>(
      <Card
      key={index}
      image={ali.image}
      title={ali.title}
      discription={ali.discription}
      >

      </Card>


    )

    )}
    

 

    </div>
    </div>
</div>
    </section>
  )
}

export default Section6