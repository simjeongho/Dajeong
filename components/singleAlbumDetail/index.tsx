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
	postNum: String;
};

const SingleAlbumDetail = () => {
	useEffect(() => {
		axios
			.post("/singleAlbum/getDetail")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
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
