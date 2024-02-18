import { useEffect, useState } from 'react';

import { ListGroup, Button } from 'react-bootstrap';

import { TodoContext } from "../contexts/TodoContext";

import TodoItem from './TodoItem';
import AddTodoModal from './AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => setTodos(Object.values(result)));
    }, []);

    const onTodoAddSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values),
        });

        const result = await response.json();

        setShowAddTodo(false);

        setTodos(state => [...state, result]);
    };

    const onTodoDeleteClick = async (todoId) => {
        await fetch(`${baseUrl}/${todoId}`,
            { method: 'DELETE' }
        );

        // check if response from fetch is ok

        setTodos(state => state.filter(x => x._id !== todoId));
    };

    const onTodoClick = async (todoId) => {
        const todo = todos.find(x => x._id === todoId);

        await fetch(`${baseUrl}/${todoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                isCompleted: !todo.isCompleted,
            })
        });

        // check if response from fetch is ok

        setTodos(state => state.map(x => x._id === todoId ? { ...x, isCompleted: !x.isCompleted } : x));
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    const cotextValue = {
        onTodoDeleteClick,
        onTodoClick,
    };

    return (
        <TodoContext.Provider value={cotextValue}>
            <div style={{ width: '30%', margin: '10px auto' }}>
                <h2>Todo List</h2>

                <ListGroup styl={{ marginBottom: '10px' }}>
                    {todos.map(t => <TodoItem key={t._id} {...t} />)}
                </ListGroup>

                <Button variant="primary" onClick={onTodoAddClick}>Add</Button>

                <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
            </div>
        </TodoContext.Provider>
    );
};