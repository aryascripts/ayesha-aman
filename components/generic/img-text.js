import React from "react";

export const ImageContent = props => (
  <div className="wrapper">
    <div className="img-wrapper">
      <div className="image"></div>
    </div>

    <div className="text">
      <div className="title">{props.title}</div>

      <div className="paragraphs">
        {props.text.map((para, index) => (
          <div key={index} className="para">{para}</div>
        ))}
      </div>
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
				margin: 0 20px 20px 0;
			}

			.text {
				flex-grow: 2;
				max-width: 50%;
				font-family: 'Helvetica', 'Arial', sans-serif;
			}
			
			.paragraphs {
				background: rgba(255, 255, 255, 0.6);
				padding: 10px;
			}
			.para {
				padding: 10px 0;
			}

			.title {
				text-transform: uppercase;
				font-size: 20px;
				font-weight: 600;
				display: inline-block;
				padding: 3px 5px;
				background-color: white;
			}

			.image {
				background: url('./images/${props.image}');
				background-size: cover;
				min-height: 250px;
				border: 15px solid white;
			}

			@media only screen and (max-width: 640px) {
				.text {
					max-width: 100%;
				}
			}

		`}</style>
  </div>
);
