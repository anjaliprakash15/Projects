import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button className="btn btn-success rounded-circle" style= {{color:'white', textAlign:'center'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className="btn btn-danger rounded-circle" style= {{color:'white', textAlign:'center'}} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;
