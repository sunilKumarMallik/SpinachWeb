import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import inject from '@rollup/plugin-inject';
// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./environment",
  plugins: [
    // inject({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),
    react(),
  ],
});


// export default defineConfig({
//   plugins: [
//     inject({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery',
//     }),
//     htmlPurge(),
//   ],
//   css: {
//     devSourcemap: true,
//   },
// });