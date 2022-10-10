import React, { useEffect } from "react";
import { greetings, HeroSectionData } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";
import { Button as MuiButton } from '@mui/material'
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal'

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	});
	return (

		<main style={{
			backgroundColor: '#37517e',
			// height:'500px'
			// paddingTop: '50px'
		}}
			id="home"
		>
			<div className="position-relative">
				<section className="section section-lg section-shaped">
					<Container className="py-lg-md d-flex"
					style={{
						// backgroundColor:'red',
						
						// margin:0,
						// padding:0
					}}
					>
						<div className="col px-0">
							<Row>

								<Col lg="6">
									<Reveal bottom duration={1000}>
										<div>
											<h1 className="display-3 text-white">
												{HeroSectionData.title + " "}
											</h1>
											<h2 className="lead text-white">
												{HeroSectionData.subTitle}
											</h2>
											<SocialLinks />
											<div className="btn-wrapper my-4"
												style={{
													display: "flex",
													alignItems: 'center'
												}}
											>

												<MuiButton
													variant="contained"
													style={{
														borderRadius: '20px',
														backgroundColor: '#47b2e4',
														border: 0,
														color: 'white',
														textTransform: 'none',
														marginRight: '20px',
														paddingLeft: '20px',
														paddingRight: '20px'
													}}
												>
													Get Start
												</MuiButton>

												<MuiButton variant="text"
													style={{
														color: "white",
														textTransform: 'none'

													}}
													href="#contact"
												>Contact Us</MuiButton>
											</div>
										</div>
									</Reveal>

								</Col>

								<Col lg="6">
									<Reveal right duration={1000}>
										<div>
											<GreetingLottie animationPath="/lottie/hero1.json" />
										</div>
									</Reveal>
								</Col>

							</Row>
						</div>
					</Container>

					<div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
				{/* 1st Hero Variation */}
			</div>
		</main>
	);
};

export default Greetings;
