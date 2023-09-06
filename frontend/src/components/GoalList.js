import React from 'react';
import Goal from './Goal';

import { AiOutlineFileAdd } from 'react-icons/ai';

function GoalList({ goals, onDelete, onEdit , onAdd}) {
    return (
        <table id="goals">
            <caption><strong>Add and Edit FIFA Game Information</strong></caption>
            <thead>
                <tr>
                    <th>Name of Country</th>
                    <th>Goals Scored</th>
                    <th>Date of Game</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><AiOutlineFileAdd size={25} onClick={() => onAdd(goals)}/></th>
                </tr>
            </thead>
            <tbody>
                {goals.map((goal, i) => 
                    <Goal 
                        goal={goal} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GoalList;
