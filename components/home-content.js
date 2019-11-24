import React from 'react';
import { ImageContent } from './generic/img-text';
import { mainContent } from '../static/content';

export const HomeContent = () => (
	<div className="background">
		<div className="our-story">
			Our Story
		</div>

		<ImageContent image={'about-us.jpg'} text={mainContent.aboutUs.para} title={mainContent.aboutUs.title}/>


		<style jsx>{`
			.background {
				background-color: #7D3549;
				min-height: 500px;
				width: 100%;
				margin-top: 90vh;
				overflow: visible;
			}

			.our-story {
				font-size: 10vmin;
				font-family: 'Pinyon Script',cursive;
				color: white;
				text-align: center;
				margin-top: -4vh;
				z-index: 20;
				position: relative;
			}
		
		`}</style>
	</div>
)