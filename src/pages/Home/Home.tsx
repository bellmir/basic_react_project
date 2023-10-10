import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
// redux
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modalReducer";
// router
import { Link } from "react-router-dom";
// api
// import { useGetUserInfoApi } from "@/api/useSampleApi";	// api 활용법 샘플

function Home() {
	// const { data: userInfo } = useGetUserInfoApi(); // api 활용법 샘플

	const dispatch = useDispatch();
	const handleClick = {
		open: () => {
			dispatch(
				openModal({
					title: "sample",
					content: <div>sample</div>,
				})
			);
		},
	};

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<button onClick={() => handleClick.open()}>모달 열기</button>
			<div>
				<Link to="/sample">sample page로 이동</Link>
			</div>
		</>
	);
}

export default Home;
