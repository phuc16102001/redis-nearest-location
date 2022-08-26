# Redis cache - Geospatial query

[![stars](https://custom-icon-badges.herokuapp.com/github/stars/phuc16102001/redis-nearest-location?logo=star)](https://github.com/phuc16102001/redis-nearest-location/stargazers "stars")

## Introduction

This is a demo to use Redis cache - a platform for caching. Instead of running self-hosted caching database, I currently use the `Redis cloud` for the demonstration.

In this demo, the user can insert locations which defined by a coordinate (longitude, latitude) and its label. After that, they can use Redis cache to query the `nearest` location with the limited distance.

## How to use

### Environment setting

Because of using `Redis cloud`, you first need to register and create your own database. For the searching purpose, I use the `Redis search` module. At the next stage, create the `.env` file at the `/backend` folder to specify the path which is used to connect to your database:

```bash
REDIS_URL="redis://<username>:<password>@<public_endpoint>"
```

For instance, the connection string can be:

```bash
REDIS_URL="redis://default:abc123@redis-123.cloud.com:13245"
```

Then install NPM packages for each server, and start it up:

For the frontend:

```bash
$ cd frontend
$ npm i
$ npm start
```

For the backend:

```bash
$ cd frontend
$ npm i
$ npm start
```

### Run with Docker

If you have Docker, you can easliy run the project with installing stuff (e.g. NodeJS, NPM packages). Firstly, place your `REDIS_URL` above to the `docker-compose.yml`:

```yml
environment:
  - REDIS_URL=<YOUR_REDIS_URL>
```

Then run with a single command:

```bash
$ docker-compose up -d
```

If you need to see the logs, use the command:

```bash
$ docker-compose logs -f
```

## Technologies

<div align="center" >
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white">
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
</div>
<div align="center" >
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</div>

## Gallery

<p align="center">
  <img src="./res/gallery.png" height="350" width="850" />
</p>

## Contribution

This project belongs to [phuc16102001](https://github.com/phuc16102001). If you find it helpful, please give it a star 🌟
