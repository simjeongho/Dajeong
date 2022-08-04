import { MultiAlbumContentArea } from "components/multiAlbumDetail/styled";
import {
	MultiAlbumDescriptionSkeletonContainer,
	MultiAlbumDetailSkeletonContainer,
	MultiAlbumSkeletonImageArea,
	MultiAlbumTitleSkeletonContainer,
} from "./styled";

const MultiAlbumDetailSkeleton = () => {
	return (
		<MultiAlbumDetailSkeletonContainer>
			<MultiAlbumSkeletonImageArea></MultiAlbumSkeletonImageArea>
			<MultiAlbumContentArea>
				<MultiAlbumTitleSkeletonContainer></MultiAlbumTitleSkeletonContainer>
				<MultiAlbumDescriptionSkeletonContainer></MultiAlbumDescriptionSkeletonContainer>
			</MultiAlbumContentArea>
		</MultiAlbumDetailSkeletonContainer>
	);
};

export default MultiAlbumDetailSkeleton;
