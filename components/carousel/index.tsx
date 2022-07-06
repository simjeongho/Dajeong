import React from "react";
import ReactSlick, { Settings } from "react-slick";
import styled, { css } from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
	settings?: Settings;
	children: React.ReactNode;
	title: string;
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
const SliderContainer = styled.div`
	padding: 1rem;
	border: 0.8rem solid white;
	margin-bottom: 1rem;
	width: 70%;
	height: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const SliderTitle = styled.h1`
	font-family: var(--font-Dongle);
	font-size: 2rem;
	color: white;
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

const AxiosSlider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children, title }) => (
	<SliderContainer>
		<SliderTitle>{title}</SliderTitle>
		<ReactSlick {...settings}>{children}</ReactSlick>
	</SliderContainer>
);

export default AxiosSlider;
