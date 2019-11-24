import React from "react";

export const ImageContent = props => (
  <div className="wrapper">
    <div className="img-wrapper">
      <div className="image"></div>
    </div>

    <div className="text">
			<div className="title">{props.title}</div>
      <div className="para">{props.text}</div>
    </div>

    <style jsx>{`

			.wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 40px;
				max-width: 900px;
				margin: 0 auto;
			}

			.img-wrapper {
				flex-grow: 1;
				min-width: 250px;
				margin-right: 20px;
			}

			.title {
				text-transform: uppercase;
				font-family: 'Helvetica', 'Arial', sans-serif;
				font-size: 20px;
				font-weight: 600;
				display: inline-block;

				background-color: white;
			}

			.image {
				background: url('./images/${props.image}');
				background-size: cover;
				min-height: 250px;
				border: 15px solid white;
			}

			.text {
				flex-grow: 1;
				min-width: 300px;
			}
		`}</style>
  </div>
);
