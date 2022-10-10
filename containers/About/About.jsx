import React from "react";
import { AboutUs } from "../../portfolio";
import Fade from 'react-reveal/Fade';

function About() {


    return (
        <Fade duration={3000}>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                {AboutUs.description1}
                            </p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                {AboutUs.description2}
                            </p>
                            <a href="#portfolio" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default About