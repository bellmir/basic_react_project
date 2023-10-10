import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/redux/modalReducer";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // 모달 넘길때 non-serializable value 에러 제거
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
