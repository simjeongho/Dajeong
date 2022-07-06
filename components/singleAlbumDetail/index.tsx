import { useEffect } from "react";
import { NonNullChain } from "typescript";
import {
	SingleAlbumContentContainer,
	SingleAlbumDetailContainer,
	SingleAlbumDetailDescription,
	SingleAlbumDetailDescriptionContainer,
	SingleAlbumDetailImage,
	SingleAlbumDetailImageContainer,
	SingleAlbumDetailTitle,
	SingleAlbumDetailTitleContainer,
} from "./styled";
import axios from "axios";

type DetailProps = {
	title: string;
	content: string;
	filepath: string;
};

const SingleAlbumDetail = ({ title, content, filepath }: DetailProps) => {
	return (
		<SingleAlbumDetailContainer>
			<SingleAlbumDetailImageContainer>
				<SingleAlbumDetailImage src={`http://localhost:5000/${filepath}`} alt={title} width={300} height={400} />
			</SingleAlbumDetailImageContainer>

			<SingleAlbumContentContainer>
				<SingleAlbumDetailTitleContainer>
					<SingleAlbumDetailTitle>{title}</SingleAlbumDetailTitle>
				</SingleAlbumDetailTitleContainer>
				<SingleAlbumDetailDescriptionContainer>
					<SingleAlbumDetailDescription>{content}</SingleAlbumDetailDescription>
				</SingleAlbumDetailDescriptionContainer>
			</SingleAlbumContentContainer>
		</SingleAlbumDetailContainer>
	);
};

export default SingleAlbumDetail;
