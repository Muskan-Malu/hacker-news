const express = require('express');
const router = express.Router();
const DataPopulateController = require('../module/DataPopulateController')
// const StaticStoriesData = require('../module/StoryController');
const userController = require('../module/userController');
const storyController = require('../module/StoryController');

router.use(express.json());
router.post('/fetchData', DataPopulateController.StoryPopulate);
router.post('/login', userController.Login);
router.post('/signup', userController.Signup);
router.post('/vote', storyController.UpdateVote);
router.get('/getData', storyController.StaticStoriesData);

module.exports = router;