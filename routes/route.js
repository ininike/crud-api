import express from "express"
import { genreController } from "../controllers/genreController.js";


export const route = express.Router()

route.get('/vidly/genres',genreController.getGenre);

route.get('/vidly/genres/:value',genreController.findGenre);

route.post('/vidly/genres',genreController.postGenre);

route.put('/vidly/genres',genreController.putGenre);

route.delete('/vidly/genres/:value',genreController.deleteGenre);
