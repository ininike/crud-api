import Joi from "joi";
import { genredb } from "../config/genreData.js";

let genres = await genredb.query(`select * from genres`);

export const genreController= {
    getGenre: (req,res) => {
        return res.json(genres[0]);
    },

    postGenre: (req,res) => {
        const { error } = validateGenre(req.body)
        if (error){
            res.status(400).send(error.details[0].message);
        }else{
            genredb.query(`insert into genres(name) values ("${req.body.name}")`);
        }       
        return res.json('Genres Updated!');
    },

    findGenre: (req,res) => {
        const genre = genres[0].find((value) => { return value.id == req.params.value || value.name === req.params.value;})
        if(!genre){ return res.status(404).json('The genre specified was not found')}
        return res.send(genre);
    },

    putGenre: (req,res) => {
        const genre = genres[0].find((value) => { return value.id == req.body.id || value.name === req.body.name;})
        if(!genre){return res.status(404).json('The genre specified was not found')}

        const { error }= validateGenre(req.body);
        if(error){res.status(404).send(error.details[0].message)}
        else{
            genre.name = req.body;
            res.send(course);
        }
        return
    },

    deleteGenre: (req,res) => {
        const genre = genres[0].find((value) => { return value.id == req.params.value || value.name === req.params.value;})
        if(!genre){ return res.status(404).json('The genre specified was not found')}
        
        const index = genres[0].indexOf(genre);
        genres[0].splice(index, 1);
       
        res.json(genre);
    }
        
}
 function validateGenre(genre){
        const schema= Joi.object({
            name: Joi.string().min(3).required()
        })

        return schema.validate(genre);
    }