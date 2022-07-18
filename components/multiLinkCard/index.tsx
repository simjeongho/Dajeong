import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardContainer, CardImageWrapper, CardInfo, CardKeyWord, CardTitle } from "./styled";
type LinkCardProps = {
	src: StaticImageData | string;
	title: string;
	alt: string;
	year: string;
	width: number;
	height: number;
	linkurl: string;
	query: number | string;
};

const MultiLinkCard: React.FC<LinkCardProps> = ({ src, title, alt, year, width, height, linkurl, query }) => {
	return (
		<Link
			href={{
				pathname: `${linkurl}`,
				query: { id: query },
			}}
		>
			<CardContainer>
				<CardImageWrapper>
					<Image
						src={src}
						alt={alt}
						layout="responsive"
						quality={100}
						width={width}
						height={height}
						unoptimized={true}
					/>
				</CardImageWrapper>
				<CardInfo>
					<CardTitle>{title}</CardTitle>
					<CardKeyWord>{year}</CardKeyWord>
				</CardInfo>
			</CardContainer>
		</Link>
	);
};

export default MultiLinkCard;
