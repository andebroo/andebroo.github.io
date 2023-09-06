import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';


function Goal({ goal, onEdit, onDelete }) {
    return (
        <tr>
            <td>{goal.countryName}</td> 
            <td>{goal.goalScored}</td>
            <td>{goal.gameDate.slice(0,10)}</td>
            <td><AiOutlineDelete size={25} onClick={() => onDelete(goal._id)} /></td>
            <td><AiOutlineEdit size={25} onClick={() => onEdit(goal)} /></td>
        </tr>
    );
}

export default Goal;