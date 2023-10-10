// core
import React from "react";
import ReactDOM from "react-dom/client";
// react-query
import { QueryClient, QueryClientProvider } from "react-query";
// redux
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// 공용 css
import "@/style/css/reset.css";
import "@/style/css/common.css";
// component
import App from "@/App";

// production 단계에서 console 출력 방지
if (process.env.NODE_ENV === "production") {
	console.log = () => {};
	console.error = () => {};
	console.debug = () => {};
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
