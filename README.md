# Plantillas de componets 

- El objetivo es tener a mano algunas plantillas que pueda usar en proyectos
- Aprender a dejar un frontend listo para un backend
- Simular consumo de apis con Mocks-Apis con json-server

## para crear el proyecto con vite
- npm create vite@latest mi-proyecto -- --template react   	# crear js
- npm create vite@latest mi-proyecto -- --template react-ts	# crear para ts
- cd mi-proyecto                                              # entrar a la carpeta
- npm install                                       			# instalar dependencias
- npm install axios react-router-dom lucide-react 


## comandos para instalar json-server
- npm install -D json-server #para hacer Mock API con json server
- npx json-server src/data/productos.json arraca tu servidor local apuntando a tu archivo JSON

## CREAR ESTA ARQUITECTURA 
- cd src 
- mkdir components, config, layouts, lib, pages, services, styles, tests, types, utils, context

## Instalar Tailwind
- npm install tailwindcss @tailwindcss/vite
- npx tailwindcss init -p

- Flowbite npm install flowbite flowbite-react
- npm install framer-motion


## correr el front
- npm run  dev 
