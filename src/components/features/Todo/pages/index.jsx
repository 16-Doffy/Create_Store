import React, { useState } from 'react';
import TodoList from '../components/TodoList';

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
    const initTodoList = [
        {
            id:1 ,
            title: 'Eat',
            status:'new',
        },
        {
            id:2 ,
            title: 'Sleep',
            status:'completed',
        },
        {
            id:3 ,
            title: 'Code',
            status:'new',
        },
    ];
    const [todoList,setTodoList] = useState(initTodoList);

    const [filterStatus,setFilterStatus] = useState('all');

    const handleTodoClick =(todo,idx)=>{

        const newTodoList= [...todoList];

        console.log(todo,idx);
        
        //toggle state
        newTodoList[idx]= {
            ...newTodoList[idx],
                status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //updates
        setTodoList(newTodoList);
    };

    const handleShowAllClick =()=> {
        setFilterStatus('all');
    }

    const handleShowCompletedClick =()=>{ 
        setFilterStatus('completed');
    }

    const handleShowNewClick =()=> {
        setFilterStatus('new');
     }

            const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus===todo.status);
             // todo has status comple will show completed if not will show all
            
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeatures;
//prop can not change 
//wanna change use state