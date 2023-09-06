import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GoalList from '../components/GoalList';

function GoalsPage({ setGoalToEdit }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [goals, setGoals] = useState([]);

    // RETRIEVE the entire list of games
    const loadGoals = async () => {
        const response = await fetch('/goals');
        const goals = await response.json();
        setGoals(goals);
    } 
    

    // UPDATE a single game
    const onEdit = async goal => {
        setGoalToEdit(goal);
        redirect("/update");
    }

    // ADD a single game
    const onAddGoal = async goal => {
        setGoals(goal);
        redirect("/create");
    }


    // DELETE a single game  
    const onDeleteGoal = async _id => {
        const response = await fetch(`/goals/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/goals');
            const goals = await getResponse.json();
            setGoals(goals);
        } else {
            console.error(`The game information was not deleted. Please try again. Error = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the games
    useEffect(() => {
        loadGoals();
    }, []);

    // DISPLAY the games
    return (
        <>
            <h2>2023 FIFA Women's World Cup Games</h2>
            <p>This list includes the name of the country, number of goals the team scored, and the day the game was played.</p>
            <GoalList 
                goals={goals} 
                onEdit={onEdit} 
                onDelete={onDeleteGoal} 
                onAdd={onAddGoal}
                
            />
        </>
    );
}

export default GoalsPage;