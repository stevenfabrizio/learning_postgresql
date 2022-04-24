const express = require('express')
const router = express.Router()
const pool = require("../db");

router
    .route('/')
    .post(async (req, res) => {
        try {
            const { description } = req.body;
            const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]
            )
        
            res.json(newTodo.rows[0]);

        } catch (err) {
            console.error(err.message);
        }
    })
    .get(async (req, res) => {
        try {
            const allTodos = await pool.query("SELECT * FROM todo");

            res.json(allTodos.rows);

        } catch (err) {
            console.error(err.message);
        }
    })

router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const { id } = req.params;
            const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
                id]
            );
        
            res.json(todo.rows[0]);

        } catch (err) {
            console.error(err.message);
        }
    })
    .put(async (req, res) => {
        try {
            const { id } = req.params;
            const { description } = req.body;
            
            const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
            )

            res.json("Todo was updated!");

        } catch (err) {
            console.error(err.message);
        }
    })
    .delete(async (req, res) => {
        try {
            const { id } = req.params;

            const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
                id
            ]);

            res.json("Todo was deleted!");
            
        } catch (err) {
            console.log(err.message);
        }
  })



module.exports = router