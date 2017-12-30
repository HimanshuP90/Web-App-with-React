import api from "../api";
import { userLoggedIn } from "./auth";

export const signup = (data) => disptach => 
	api.user.signup(data).then(user => {
		localStorage.bookwormJWT = user.token;
		disptach(userLoggedIn(user));
	});