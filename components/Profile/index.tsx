import {
	LogOutButton,
	ProfileContainer,
	ProfileDescriptionContainer,
	ProfileDream,
	ProfileImage,
	ProfileImageContainer,
} from "./styled";
import moouido from "assets/images/landscape/moouido.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { userLogout } from "store/slices/user-slice";
import { API_HOST } from "apis/api";
import { useRouter } from "next/router";
const UserProfile = () => {
	const userSelector = useSelector(selectUser);
	const { email, userNickName } = userSelector;
	const dispatch = useDispatch();
	const Router = useRouter();
	const handleLogOut = () => {
		try {
			axios.post(`${API_HOST}/user/logout`, {}, { withCredentials: true }).then((res) => {
				console.log(res);
				dispatch(userLogout());
				Router.replace({
					pathname: "/",
				});
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<ProfileContainer>
			<ProfileImageContainer>
				<ProfileImage src={moouido} width={300} height={400} />
			</ProfileImageContainer>
			<ProfileDescriptionContainer>
				<h1>{userNickName}</h1>
				<h2>{email}</h2>
				<LogOutButton onClick={handleLogOut}>
					<IoLogOutOutline />
					LogOut
				</LogOutButton>
				<ProfileDream></ProfileDream>
			</ProfileDescriptionContainer>
		</ProfileContainer>
	);
};

export default UserProfile;