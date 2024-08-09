
import "../../style/home.css";
// import Check from "./Check";

const Home = ()=> {

  return (

    <div
      className="home-container container-fluid"
    >
      {/* <div className="container"> */}
      {/* <Check /> */}

      <div className="row  contents-container container">
        <div className="col-6 contents-column ">
          <div className=" highlight-slogan ">
            <h2 className="slogan-text">
              <p></p>
              <span className=" fw-bold  slogan-text">
                Ignite Your
                {/* <br className="large-screen-breakdown"/> */}
                <span className="mx-2 " style={{ color: "#ee5d0e" }}>
                  Abroad <br className="small-screen-breakdown" /> Studies
                </span>
                <span style={{ color: "#ee5d0e" }}></span> with Munal
              </span>
              <p className=" fw-bold slogan-text "> Education Hub</p>
            </h2>
            <p style={{width:'75%'}}>
              <strong>
                Munal Education Hub Pvt Ltd. Your key to global education
                success. Tailored advice, insights, and support for a seamless
                journey to study abroad.
              </strong>
            </p>
            <a role="button" className="btn home-button" data-aos= "fade-up">
              Get Started  <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          {/* <div className="col fw-bold">
            <p>
              Munal Education Hub Pvt Ltd. Your key to global education success.
              Tailored advice, insights, and support for a seamless journey to
              study abroad.
            </p>
          </div> */}
          {/* <div>
            <a role="button" className="btn btn-outline-primary">
              Get Started
            </a>
          </div> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Home
