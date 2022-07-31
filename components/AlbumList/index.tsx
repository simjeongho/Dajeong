import AllAlbumCard from "components/AllAlbumCard";
import { AlbumListComponent, AlbumListComponentContainer } from "./styled";

const AlbumList = () => {
	return (
		<AlbumListComponentContainer>
			<AlbumListComponent>
				<AllAlbumCard />
			</AlbumListComponent>
		</AlbumListComponentContainer>
	);
};

export default AlbumList;
