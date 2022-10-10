import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { seoData } from "../portfolio";

function SEO() {
	return (
		<Head>
			<title>{seoData.title}</title>
			<meta name="title" content={seoData.title} />
			<meta name="author" content={seoData.author} />
			<meta name="description" content={seoData.description} />
			<meta name="keywords" content={seoData.keywords.join(", ")} />
			<link rel="canonical" href={seoData.url} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={seoData.url} />
			<meta property="og:title" content={seoData.title} />
			<meta property="og:description" content={seoData.description} />
			<meta property="og:image" content={seoData.image} />
			<meta property="og:site_name" content={seoData.title} />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={seoData.url} />
			<meta property="twitter:title" content={seoData.title} />
			<meta property="twitter:description" content={seoData.description} />
			<meta property="twitter:image" content={seoData.image} />
			<meta name="robots" content="Index" />
			<link rel="manifest" href="/manifest.json" />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./favicon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./favicon.png"
			/>

			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
				rel="stylesheet"
			/>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
		</Head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		author: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default SEO;
