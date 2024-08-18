import OwlCarousel from "react-owl-carousel/dist/OwlCarousel";
import canada from "../../assets/images/canada.jpg";
import australia from "../../assets/images/australia.jpg";
import usa from "../../assets/images/usa.jpg";
import uk from "../../assets/images/uk.jpg";
import australiaFlag from "../../assets/images/australiaFlag.png";
import canadaFlag from "../../assets/images/canadaFlag.png";
import usaFlag from "../../assets/images/usFlag.png";
import ukFlag from "../../assets/images/ukFlag.png";
import "../../style/destination.css";
export default function Destination() {
  const options = {
    mouseDrag:true,
    touchDrag:true,
    margin:30,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false,
    dots: true,
  };

  return (
    <div className="destination-slide-container">
      <div className="destination-title d-flex flex-column justify-content-center align-items-center">
        <p className="text-uppercase fw-bold mt-5" style={{ color: "#ee5d0e" }}>
          Destinations
        </p>
        <p
          className="fs-1 fw-bold choose-countries"
          style={{ color: " #14176c" }}
        >
          Countries to Choose From
        </p>
      </div>
      <OwlCarousel className="owl-theme ml-1 mr-1" loop margin={20} autoplay {...options}>
        <div className="item ">
          <div className="card">
            <div className="img-wrapper shine-animate">
              <img src={australia} alt="Australia" />
            </div>
            <div className="flag">
              <img src={australiaFlag} alt="Australia Flag" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Australia</h5>
              <p className="card-text">
                Australia is world famous for its natural wonders and wide open
                spaces, its beaches, deserts, “the bush”, and “the Outback”.
              </p>
              <a
                href="https://www.munaleduhub.com/destination/study-in-australia"
                className=" btn destination-btn  "
              >
                Read More <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="card">
            <div className="img-wrapper shine-animate">
              <img src={canada} alt="Canada" />
            </div>
            <div className="flag">
              <img src={canadaFlag} alt="Canada Flag" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Canada</h5>
              <p className="card-text">
                Canada is the land of immigrants with a cross-cultural,
                multilingual society. With an amalgamation of national and
                cultural ethnic groups, the nation differs significantly from
                one province to another.
              </p>
              <a
                href="https://www.munaleduhub.com/destination/study-in-canada"
                className=" btn destination-btn  "
              >
                Read More <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="card">
            <div className="img-wrapper shine-animate">
              <img src={uk} alt="UK" />
            </div>
            <div className="flag">
              <img src={ukFlag} alt="UK Flag" />
            </div>
            <div className="card-body">
              <h5 className="card-title">UK</h5>
              <p className="card-text">
                The United Kingdom (UK), consisting of England, Scotland, Wales,
                and Northern Ireland, boasts a rich tapestry of history,
                culture, and innovation.
              </p>
              <a
                href="https://www.munaleduhub.com/destination/study-in-uk"
                className=" btn destination-btn "
              >
                Read More <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="card">
            <div className="img-wrapper shine-animate">
              <img src={usa} alt="USA" />
            </div>
            <div className="flag">
              <img src={usaFlag} alt="USA Flag" />
            </div>
            <div className="card-body">
              <h5 className="card-title">USA</h5>
              <p className="card-text">
                The United States of America (USA) has the most extensive and
                pulsating academic background with a vivacious multidisciplinary
                environment and voracious faculty
              </p>
              <a
                href="https://www.munaleduhub.com/destination/study-in-usa"
                className=" btn destination-btn "
              >
                Read More <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
      ;
    </div>
  );
}
