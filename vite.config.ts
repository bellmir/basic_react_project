import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			// import 경로 수정
			{ find: "@", replacement: path.resolve(__dirname, "./src") },
		],
	},
	// server: {
	//   host: '0.0.0.0',
	//   proxy: {
	//     '/api': {
	//       // target: 'https://eprocurement.greatbee.kr',
	//       // target: 'https://test2.greatbee.co.kr',
	//       target: 'http://13.209.73.165:8088/',
	//       changeOrigin: true,
	//       secure: false,
	//       ws: true,
	//     },
	//   },
	// },
});
