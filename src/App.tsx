// router
import { RouterProvider } from "react-router-dom";
import router from "@/router/router";
// redux
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ModalType } from "@/redux/modalReducer";
// components
import GlobalHeader from "@/component/layout/GlobalHeader";
import GlobalFooter from "@/component/layout/GlobalFooter";
import Modal from "@/component/modal/Modal";

function App() {
	// 모달 리스트
	const { modalList } = useSelector((state: RootState) => state.modal);

	return (
		<>
			<GlobalHeader />
			<RouterProvider router={router} fallbackElement={<div>loading</div>} />
			{/* 모달출력 */}
			<GlobalFooter />
			{modalList.map((item: ModalType, idx: number) => (
				<Modal
					key={"modal" + idx}
					title={item.title}
					hasClose={item.hasClose}
					bgFilter={item.bgFilter}
					isTopFixed={item.isTopFixed}
				>
					{item.content}
				</Modal>
			))}
		</>
	);
}

export default App;
