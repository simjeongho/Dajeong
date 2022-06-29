import React from "react";
import ReactSlick, { Settings } from "react-slick";
import styled, { css } from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "components/card";
import mangWon from "assets/image/mangwon.jpg";
import hanRiver from "assets/image/hanriver.jpg";
import gangneungdaeun from "assets/image/gangneungdaeun.jpg";
import incheonpark from "assets/image/incheonpark.jpg";
import inhoo from "assets/image/inhoo.jpg";
import construct from "assets/image/construct.jpg";
import daebudo from "assets/image/daebudo.jpg";
import moouido from "assets/image/moouido.jpg";
import prettydaeun from "assets/image/prettydaeun.jpg";
import Image from "next/image";

interface Props {
	settings?: Settings;
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

const StaticSlider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS }) => (
	<ReactSlick {...settings}>
		<Image src={mangWon} alt="망원" />
		<Image src={hanRiver} alt="망원" />
		<Image src={gangneungdaeun} alt="망원" />
		<Image src={incheonpark} alt="망원" />
		<Image src={construct} alt="망원" />
		<Image src={inhoo} alt="망원" />
		<Image src={daebudo} alt="망원" />
		<Image src={moouido} alt="망원" />
		<Image src={prettydaeun} alt="망원" />
	</ReactSlick>
);

export default StaticSlider;
