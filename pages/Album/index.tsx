import Link from "next/link";
import { AlbumListContainer, SingleAlbumWritesButton } from "./styled";

const Albums = () => {
	return (
		<AlbumListContainer>
			<Link href="Album/SingleAlbumWrites">
				<SingleAlbumWritesButton>싱글 앨범 작성</SingleAlbumWritesButton>
			</Link>
		</AlbumListContainer>
	);
};

export default Albums;
