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

type DetailProps = {
	postNum: String | null;
};

const SingleAlbumDetail = () => {
	return (
		<SingleAlbumDetailContainer>
			<SingleAlbumDetailImageContainer></SingleAlbumDetailImageContainer>

			<SingleAlbumContentContainer>
				<SingleAlbumDetailTitleContainer>
					<SingleAlbumDetailTitle />
				</SingleAlbumDetailTitleContainer>
				<SingleAlbumDetailDescriptionContainer>
					<SingleAlbumDetailDescription>gggg</SingleAlbumDetailDescription>
				</SingleAlbumDetailDescriptionContainer>
			</SingleAlbumContentContainer>
		</SingleAlbumDetailContainer>
	);
};

export default SingleAlbumDetail;
