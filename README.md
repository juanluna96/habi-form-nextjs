## Proyecto de registrar apartamento en Habi

Este proyecto es una aplicación que cumple con los siguientes requisitos:

## Características

- Página de pasos: La aplicación consta de una serie de pasos donde se recopilará información del inmueble.
- Página 404: Se incluye una página personalizada para rutas no encontradas.
- Uso de Redux Toolkit: La aplicación utiliza Redux Toolkit para gestionar el estado de la aplicación de manera eficiente.
- Desarrollada con Next.js: La aplicación se desarrolla utilizando el framework Next.js, que ofrece beneficios como renderizado del lado del servidor y enrutamiento simplificado.

## Ejecutando localmente en desarrollo

Para comenzar, simplemente clona el repositorio y ejecuta `npm install && npm run dev`:

    git clone https://github.com/juanluna96/habi-form-nextjs.git
    npm install
    npm run dev

## Ejecutando los test

Para comenzar, simplemente clona el repositorio y ejecuta `npm install --save-dev && npm run test`:

    git clone https://github.com/juanluna96/habi-form-nextjs.git
    npm install --save-dev
    npm run test

## Usando docker

### Pre-requisitos

Asegúrate de haber instalado previamente Docker Engine.
No es necesario instalar NPM, ya que es proporcionado por las imágenes de Docker.

```
$ docker -v
Docker version 18.03.1-ce, build 9ee9f40
```

### Instalar

```
git clone https://github.com/juanluna96/habi-form-nextjs.git
cd habi-form-nextjs
docker compose up
```
Ve a [http://localhost:3000](http://localhost:3000)