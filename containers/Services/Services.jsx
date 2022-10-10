import React from "react";


export default () => {

    return (
        <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Services</h2>
                </div>

                <div class="row">
                    <div
                        class="col-xl-4 col-md-12 d-flex align-items-stretch"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div class="icon-box">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4><a href="">Web Development</a></h4>
                            <p>
                                We have build websites for small businesses and large.
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-4 col-md-12 d-flex align-items-stretch mt-4 mt-md-0"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-file"></i></div>
                            <h4><a href="">Mobile App Development</a></h4>
                            <p>
                                Creating a Mobile application is easy with us.
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-4 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-tachometer"></i></div>
                            <h4><a href="">Graphics & UI/UX Design</a></h4>
                            <p>
                                Design is the art of telling a story in a way that is meaningful to the audience.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}