import { Deletebutton, UploadCardContainer, UploadImage } from "./styled";
import { AiOutlineDelete } from "react-icons/ai";
type ImageInstance = {
	src: string;
	width: number;
	height: number;
};
const UploadCard = ({ src, width, height }: ImageInstance) => {
	return (
		<UploadCardContainer>
			<UploadImage src={src} height={height} width={width}></UploadImage>
		</UploadCardContainer>
	);
};

export default UploadCard;
