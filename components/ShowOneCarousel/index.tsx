import React from "react";
import ReactSlick, { Settings } from "react-slick";
import styled, { css } from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
	settings?: Settings;
	children: React.ReactNode;
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
	padding: 2rem;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	margin-bottom: 1rem;
	width: 50%;
	height: 100%;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const DEFAULT_SETTINGS: Settings = {
	dots: true,
	arrows: true,
	infinite: true,
	centerMode: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: false,
	autoplay: false,
	centerPadding: "20%",
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

const OneSlider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
	<SliderContainer>
		<ReactSlick {...settings}>{children}</ReactSlick>
	</SliderContainer>
);

export default OneSlider;
