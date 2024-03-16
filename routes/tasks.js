const express=require('express');
const router = express.Router();
const {addTask,completeTask,undoComplete, getTasks} = require('../controllers/tasks');

router.post("/addtask", addTask); //wbf
router.post("/complete", completeTask);//wb
router.post("/undocomplete", undoComplete);//wb
router.get("/gettasks", getTasks);//wbf
module.exports = router; 