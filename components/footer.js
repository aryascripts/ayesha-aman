import React from 'react';
import { css } from '../static/variables';
import { mainContent } from '../static/content';

export const Footer = () => (
	<div className="footer">

		<div className="quote">
			{mainContent.footerQuote}
		</div>

		<div className="ab-ab">
			ab * ab
		</div>

	<style jsx>{`
		.footer {
			width: 100%;
			background-color: ${css.colors.body};
		}
		
		.quote {
			font-size: 18px;
			font-family: 'Source Sans Pro', sans-serif;
			padding: 0 25px;
			width: 60%;
			margin: 10px auto 0 auto;
			text-align: center;
			max-width: 900px;
		}

		.ab-ab {
			text-align: center;
			font-family: 'Pacifico', cursive;
			font-size: 24px;
			margin: 15px 0;
		}

	`}</style>
	</div>
)