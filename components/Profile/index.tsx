import {
	ProfileContainer,
	ProfileDescriptionContainer,
	ProfileDream,
	ProfileImage,
	ProfileImageContainer,
	ProfileName,
} from "./styled";
import moouido from "assets/images/landscape/moouido.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
const UserProfile = () => {
	const userSelector = useSelector(selectUser);
	const { email, userNickName } = userSelector;
	return (
		<ProfileContainer>
			<ProfileImageContainer>
				<ProfileImage src={moouido} width={300} height={400} />
			</ProfileImageContainer>
			<ProfileDescriptionContainer>
				<ProfileName>
					{userNickName}
					<h2>{email}</h2>
				</ProfileName>
				<ProfileDream></ProfileDream>
			</ProfileDescriptionContainer>
		</ProfileContainer>
	);
};

export default UserProfile;
