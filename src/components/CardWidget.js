import React from "react";
import { Figure } from 'react-bootstrap'
import logo from '../assets/logo.png';

export function CardWidget() {
	return(
		<Figure className="f-logo">
			<Figure.Image
				className="mr-auto mb-0"
				width={40}
				height={40}
				alt="logo-europea"
				src={logo}
			/>
		</Figure>
	);
}
