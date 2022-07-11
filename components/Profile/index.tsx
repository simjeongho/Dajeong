import { ProfileContainer } from "pages/styled";
import { ProfileDescriptionContainer, ProfileDream, ProfileImage, ProfileImageContainer, ProfileName } from "./styled";

const UserProfile = () => {
	return (
		<ProfileContainer>
			<ProfileImageContainer></ProfileImageContainer>
			<ProfileDescriptionContainer>
				<ProfileName></ProfileName>
				<ProfileDream></ProfileDream>
			</ProfileDescriptionContainer>
		</ProfileContainer>
	);
};

export default UserProfile;
