import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = {
	title?: string;
	content: JSX.Element | any;
	hasClose?: boolean;
	bgFilter?: boolean;
	isTopFixed?: boolean;
};

type StateType = {
	modalList: ModalType[];
};

const initialState: StateType = {
	modalList: [],
};

export const modalReducer = createSlice({
	name: "data",
	initialState,
	reducers: {
		// openAlert: (state: any, action: PayloadAction<any>) => {
		//   switch(action.type){
		//     case 'open':
		//       window.alert(state.value);
		//       break;
		//     case 'close':
		//       console.log('close');
		//       break;
		//   }
		// },
		openModal: (state: StateType, action: PayloadAction<ModalType>) => {
			const { title, content, hasClose, bgFilter, isTopFixed } = action.payload;

			const modal: ModalType = {
				title: title,
				content: content,
				hasClose: !!hasClose,
				bgFilter: bgFilter,
				isTopFixed: isTopFixed,
			};
			state.modalList.push(modal);
		},
		closeModal: (state: StateType) => {
			if (state.modalList.length > 0) state.modalList.pop();
		},
	},
});

export const { openModal, closeModal } = modalReducer.actions;

export default modalReducer.reducer;
