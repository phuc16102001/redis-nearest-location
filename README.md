# Redis cache - Geospatial query

[![stars](https://custom-icon-badges.herokuapp.com/github/stars/phuc16102001/redis-nearest-location?logo=star)](https://github.com/phuc16102001/redis-nearest-location/stargazers "stars")

## Introduction

This is a demo to use Redis cache - a platform for caching. Instead of running self-hosted caching database, I currently use the `Redis cloud` for the demonstration.

In this demo, the user can insert locations which defined by a coordinate (longitude, latitude) and its label. After that, they can use Redis cache to query the `nearest` location with the limited distance.

## How to use

### Environment setting

Because of using `Redis cloud`, you first need to register and create your own database. For the searching purpose, I use the `Redis search` module. At the next stage, create the `.env` file at the `/backend` folder to specify the path which is used to connect to your database:

```
REDIS_URL="redis://<username>:<password>@<public_endpoint>"
```

For instance, the connection string can be:

```
REDIS_URL="redis://default:abc123@redis-123.cloud.com:13245"
```

### Running application

Secondly, you must run the backend server before running the frontend server:

```bash
$ cd backend
$ npm start
```

Then you can start the frontend - web application:

```bash
$ cd frontend
$ npm start
```

## Technologies

<div align="center" >
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</div>

## Gallery

<p align="center">
  <img src="./res/gallery.png" height="350" width="850" />
</p>

## Contribution

This project belongs to [phuc16102001](https://github.com/phuc16102001). If you find it helpful, please give it a star 🌟
