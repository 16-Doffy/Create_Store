import React, { useState, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

function ListPage() {
    const initTodoList = [
        { id: 1, title: 'Eat', status: 'new' },
        { id: 2, title: 'Sleep', status: 'completed' },
        { id: 3, title: 'Code', status: 'new' },
    ];


    const location = useLocation();
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify({ status: 'all' }),
        });
    };

    const handleShowCompletedClick = () => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify({ status: 'completed' }),
        });
    };

    const handleShowNewClick = () => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify({ status: 'new' }),
        });
    };

    //queryString.stringify: Được sử dụng 
    //để tạo chuỗi truy vấn từ đối tượng JavaScript (ví dụ: { status: 'completed' })
   
    const renderTodoList = todoList.filter(
        (todo) => filterStatus === 'all' || filterStatus === todo.status
    );
const handleTodoFormSubmit = (values)=>{
    console.log('Form Submit:' ,values);
    const newTodo = {
        id:todoList.length +1 ,
        title:values.title,
        status:'new'
    };
    const newTodoList =[...todoList,newTodo];

    setTodoList(newTodoList);
};

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;
