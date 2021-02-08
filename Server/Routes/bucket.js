const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../DBConnection')


router.get('/', (req, res, next) => {
    let sql = "select BUCKETNAME as name, id from BUCKETS"
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.json(results);
    });
});

//Bucket Add
router.post('/', (req, res, next) => {
    let newBucket = {
        name: req.body.bucket.name
    }
    connection.query('INSERT INTO BUCKETS SET ?', { BUCKETNAME: req.body.bucket.name }, function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        if (results.insertId) {
            newBucket.id = results.insertId;
            res.send({ msg: "Added Successfully!", bucket: newBucket });
        }
    });
    //database bring id -> add this id in bucket obj -> send this bucket obj to UI

});

//TODO
router.get('/:id', (req, res, next) => {
    let sql = `select * from BUCKETS JOIN TODOS on BUCKETS.ID = TODOS.BUCKET_ID where BUCKETS.ID = ${req.params.id} order By STUTUS ASC, priority ASC, created_date ASC`
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
    });
    // res.send({ bucket, todo });
    //sort -> status 0 up and sort based on priority -> sort created  date
});

//ADD TODO
router.post('/:id/todo', (req, res, next) => {
    let todo = { ...req.body.todo };
    let todoData = {};
    todoData.TITLE = req.body.todo.title;
    todoData.DESCRIPTION = req.body.todo.description;
    todoData.PRIORITY = req.body.todo.priority;
    todoData.CREATED_DATE = new Date();
    todoData.BUCKET_ID = req.body.todo.bucketId;
    todoData.STUTUS = 0;

    connection.query('INSERT INTO TODOS SET ?', todoData, function (error, results, fields) {
        if (error) throw error;
        if (results.insertId) {
            todoData.ID = results.insertId;
            res.json({ msg: "Added Successfully!", todo: todoData });
        }
    });
    //database bring id -> add this id in bucket obj -> send this bucket obj to UI

});


router.put('/:id/toggleTodoApi', (req, res, next) => {
    let sql = `UPDATE TODOS SET STUTUS = ${req.body.todoStatus ? 1 : 0} WHERE ID = ${req.params.id}`
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json({ msg: "Update Successfully!" });
    });
    //database bring id -> add this id in bucket obj -> send this bucket obj to UI

});


module.exports = router;