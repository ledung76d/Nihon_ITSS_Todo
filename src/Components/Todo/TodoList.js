import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../../server/firebase';
import { collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#f3f4f6] to-[#224f76]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`,
}

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    // Create todo
    const createTodo = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a todo')
            return
        }
        await addDoc(collection(db, "todos"), {
            text: input,
            completed: false
        });
        setInput('')
    }
    // Read todo from firebase
    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = []
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id })
            });
            setTodos(todosArr)
        })
        return () => unsubscribe()
    }, [])
    // Update todo in firebase
    const toggleCompleted = async (todo) => {
        console.log(todo)
        console.log(todo.id)
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed
        });
    }

    // Delete todo 
    const deleteTodo = async (todo) => {
        await deleteDoc(doc(db, "todos", todo.id));
    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>Todo App</h3>
                <form onSubmit={createTodo} className={style.form}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Add Todo"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                    />
                    <button className={style.button} >
                        <AiOutlinePlus size={30} />
                    </button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            toggleCompleted={toggleCompleted}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </ul>
                {!todos ?
                    <p className={style.count}>You have 0 todos</p>
                    : (
                        <p className={style.count}>You have {todos.length} todos</p>
                    )}
            </div>
        </div>
    );
}

export default TodoList;
