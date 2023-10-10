export const signOut = () => {
	localStorage.removeItem("accessToken");
	sessionStorage.removeItem("accessToken");
	window.location.href = "/signIn";
};
