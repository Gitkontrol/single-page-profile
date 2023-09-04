import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [, react()],
// })

export default defineConfig(({ command }) => {

  const config = {

      plugins: [react(), svgr(), tailwindcss("./tailwind.config.js")],

      base: "/",

  };




  if (command !== "serve") {

      config.base = "/single-profile-page/";

  }




  return config;

});
