import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import imgSlider1 from '../../images/img-slider/imgSlider1.JPG'
import imgSlider2 from '../../images/img-slider/imgSlider2.JPG'
import imgSlider3 from '../../images/img-slider/imgSlider3.JPG'

const Home = () => {
    return (
        <>
            <Container fluid className="px-0">
                <Carousel>
                    <Carousel.Item>
                        <img src={imgSlider1} className="carousel-img" alt="carousel-img" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgSlider2} className="carousel-img" alt="carousel-img" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgSlider3} className="carousel-img" alt="carousel-img" />
                    </Carousel.Item>
                </Carousel>

                <div
                    id="hero"
                    className="container-fluid text-center px-0 notranslate aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-offset={-20}
                >
                    <p className="hero left-hero">
                        ಎಲ್ಲಾದರೂ ಇರು ಎಂತಾದರು ಇರು <br /> ಎಂದೆಂದಿಗು ನೀ ಕನ್ನಡವಾಗಿರು
                    </p>
                    <div className="hero right-hero">
                        <h2>
                            <strong id="kv"> ಕನ್ನಡ ವೇದಿಕೆ </strong>
                        </h2>
                        <p id="kv-sub">ಇದು ಕನ್ನಡ ಅಭಿಮಾನಿ ಬಳಗ</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
