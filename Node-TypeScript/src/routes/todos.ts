import express from "express";
import { nextTick } from "process";
import { Todo } from '../models/todo'

const router = express.Router()
let todos: Todo[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos })
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newTodo);
    res.status(201).json({ msg: 'Added' });
})

router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid)
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text }
        return res.status(200).json({ msg: 'Updated' });
    }
    res.status(404).json({ msg: 'Could not find ID' });
})

router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ msg: 'Deleted' });
})

export default router