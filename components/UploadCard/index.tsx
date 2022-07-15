import { UploadCardContainer, UploadImage } from "./styled";
type ImageInstance = {
	src: string;
	width: number;
	height: number;
};
const UploadCard = ({ src, width, height }: ImageInstance) => {
	return (
		<UploadCardContainer>
			<UploadImage src={src} height={height} width={width} />
		</UploadCardContainer>
	);
};

export default UploadCard;
