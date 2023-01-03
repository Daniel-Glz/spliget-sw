import Link from "next/link";
import Image from "next/legacy/image";
import { SectionTitleTwo } from "../../elements/sectionTitle/SectionTitle";
import Slider from "react-slick";

const CategoryListSlide = ({ categories }) => {

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
        title="Siguientes Categorias"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
        </svg>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
        title="Categorias anteriores"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
      </button>
    );
  }

  const slideSettings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="axil-categories-list axil-section-gap bg-color-grey">
      <div className="container">
        <SectionTitleTwo title="Categorias" btnText="Ver todas" />
        <div className="row">
          <div className="col-lg-12">
            <Slider {...slideSettings} className="list-categories categories-activation axil-slick-arrow arrow-between-side">
              {categories.map((category, index) => (
                <div className="single-cat" key={index}>
                  <div className="inner">
                    <Link href={`/categoria/${category.slug}`}>
                      <div className="thumbnail">
                        <Image
                          src={category.image}
                          alt={""}
                          height={180}
                          width={180}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">{category.name}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSlide;
