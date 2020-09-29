import React from "react"
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"


const Home = () => {

    return (
        <div>
            <div className='heading'>
                <h1>Welcome to LAH Photography</h1>
                <h3>View the <a href="3">Photography Portfolio</a> to see a sampling of her work</h3>
            </div>
            <div className="content">
                <div className="mobile">
                    Take a look around.  Let us know what you think
                </div>
                <div className="p">
                    <p>Take a look around.</p>
                    <p>Find last years and this years photos in the gallery and anything over 2 years old can be found in the archive section.</p>
                </div>
                <div className="homeimgs">
                <Carousel autoPlay autoPlayInterval="2000">
                    <img src="https://images.lah-photography.com/covid.jpg" alt="covid" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/pole.jpg" alt="pole" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/girl.jpg" alt="girl" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/wedding.jpg" alt="wedding" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/newmom.jpg" alt="newmm" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/family.jpg" alt="family" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/couple.jpg" alt="couple" className="sliderimg center" />
                    <img src="https://images.lah-photography.com/pregnancy.jpg" alt="pregnancy" className="sliderimg center" />
                </Carousel>
                </div>
                <div className="p">
                    <p>Head to the Contact page to request a session of find our Facebook link.</p>
                </div>
            </div>
        </div>
    )
}

export default Home