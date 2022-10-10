import React from "react";
import SocialLinks from "../../components/SocialLinks";

export default () => {

    return (
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Contact</h2>
                </div>

                <div class="row">
                    <div class="col-lg-5 d-flex align-items-stretch">
                        <div class="info">
                            <div class="email">
                                <i class="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <a href="mailto: utopixtechnologies@gmail.com">utopixtechnologies@gmail.com</a>
                            </div>

                            <div class="phone mt-5">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+251912909541</p>
                            </div>

                            <div class="social-links mt-5">
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

                    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            class="php-email-form"
                        >
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        id="name"
                                        required
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Subject</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="subject"
                                    id="subject"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="name">Message</label>
                                <textarea
                                    class="form-control"
                                    name="message"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}