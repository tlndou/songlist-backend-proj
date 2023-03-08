const express = require('express')
const songsRouter = express.Router()
//const { check, validationResult } = require('express-validator')
const { Song, User } = require('../models')

//all songs
songsRouter.get('/', async (req, res) => {
    const allSongs = await Song.findAll()
    res.send(allSongs)
})

//one song
songsRouter.get('/:id', async (req, res) => {
    const oneSong = await Song.findByPk(req.params.id)
    res.send(oneSong)
})

//songs from specific album
songsRouter.get('/album/:albumid', async (req, res) => {
    const allSongs = await Song.findAll({
        where: {
            album: req.params.albumid
        }
    })
    res.send(allSongs)
})

//all songs from one artist
songsRouter.get('/artist/:artistid', async (req, res) => {
    const allSongs = await Song.findAll({
        where: {
            artist: req.params.artistid
        }
    })
    res.send(allSongs)
})

//deletes one song
songsRouter.delete('/:id', async (req, res) => {
    const oneSong = await Song.destroy(req.params.id)
    res.status(200)
})

module.exports = songsRouter;