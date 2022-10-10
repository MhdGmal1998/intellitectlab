import React from "react";

export default () => {

    return (
        <footer id="footer">

            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>Intellitectlab Technologies</h3>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i> <a href="#about">About us</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i> <a href="#services">Services</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i class="bx bx-chevron-right"></i> <a href="#services">UI/UX Design</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i>
                                    <a href="#services">Web Development</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i>
                                    <a href="#services">Mobile App Development</a>
                                </li>
                                <li>
                                    <i class="bx bx-chevron-right"></i>
                                    <a href="#services">Graphic Design</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>
                                Reach us on our social networks for more information.
                            </p>
                            <div class="social-links mt-3">
                                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href="#" class="instagram"
                                ><i class="bx bxl-instagram"></i
                                ></a>
                                <a href="#" class="telegram"><i class="bx bxl-telegram"></i></a>
                                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                <a href="#" class="behance"><i class="bx bxl-behance"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container footer-bottom clearfix">
                <div class="copyright">
                    &copy; Copyright <strong><span>Intellitectlab Technologies</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <a href="#">Intellitectlab</a>
                </div>
            </div>
        </footer >
    )
}