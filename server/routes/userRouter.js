const express = require('express');
const router = express.Router();
const controller = require('../module/controller')
// const StaticStoriesData = require('../module/StoryController');
const userController = require('../module/userController');
const storyController = require('../module/StoryController');

router.use(express.json());
router.post('/fetchData', controller);
router.post('/login', userController.Login);
router.post('/signup', userController.Signup);
router.post('/vote', storyController.UpdateVote);
router.get('/getData', storyController.StaticStoriesData);

module.exports = router;