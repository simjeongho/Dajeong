import React from "react";
import ReactSlick, { Settings } from "react-slick";
import styled, { css } from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "components/card";
import mangWon from "assets/images/mangwon.jpg";
import hanRiver from "assets/images/hanriver.jpg";
import incheonpark from "assets/images/incheonpark.jpg";
import inhoo from "assets/images/inhoo.jpg";
import daebudo from "assets/images/daebudo.jpg";
import moouido from "assets/images/moouido.jpg";

interface Props {
	settings?: Settings;
	children: React.ReactNode[];
}

const ArrowButton = styled.button<{ pos?: "left" | "right" }>`
	padding: 16px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	z-index: 1;
	top: 50%;
	background-color: #fff;
	${({ pos }) =>
		pos === "left"
			? css`
					left: 0;
					transform: translate(-50%, 50%);
			  `
			: css`
					right: 0;
					transform: translate(50%, -50%);
			  `};
	&:before {
		content: initial;
	}
	> svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		color: #222;
	}
`;

const DEFAULT_SETTINGS: Settings = {
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	vertical: false,
	autoplay: true,
	prevArrow: (
		<ArrowButton pos="left">
			<MdArrowBackIos />
		</ArrowButton>
	),
	nextArrow: (
		<ArrowButton pos="right">
			<MdArrowForwardIos />
		</ArrowButton>
	),
};

const SliderTitle = styled.h1`
	font-size: 3rem;
	color: white;
`;

const StaticSlider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
	<>
		<SliderTitle>LandScape</SliderTitle>
		<ReactSlick {...settings}>{children}</ReactSlick>
	</>
);

export default StaticSlider;
