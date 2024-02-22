import { defineConfig } from "vite"

export default defineConfig({
    root: "./src",   // Indicamos que la raiz de nuestro proyecto es la carpeta src
    base: "./", // Indicamos que use el . para indicar la carpeta actual
    publicDir: "../public", // Indicamos donde tendremos los archivos públicos, como imágenes, etc
    build: {
      outDir: "../dist", // Indicamos donde queremos que se cree la carpeta de distribución 
      
    },
    plugins: []
  });