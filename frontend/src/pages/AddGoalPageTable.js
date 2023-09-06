import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddGoalPageTable = () => {

    const [countryName, setCountryName]       = useState('');
    const [goalScored, setGoalScored]        = useState('');
    const [gameDate, setGameDate] = useState('');
    
    const redirect = useNavigate();

    const addGoal = async () => {
        const newGoal = { countryName, goalScored, gameDate };
        const response = await fetch('/goals', {
            method: 'post',
            body: JSON.stringify(newGoal),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The game was added successfully.`);
        } else {
            alert(`The game information was not added. Please try again. Error = ${response.status}`);
        }
        redirect("/goals");
    };


    return (
        <>
        <article>
            <h2>Add a game</h2>
            <p>Add a new game to the 2023 FIFA Women's World Cup list of games.</p>


            <table id="goals">
            <caption><strong>What game are you adding?</strong></caption>
                <thead>
                    <tr>
                        <th>Name of Country</th>
                        <th>Number of Goals Scored</th>
                        <th>Date of Game</th>
                        <th>Add New Game</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="countryName">Country Name</label>
                        <input
                            type="text"
                            placeholder="Name of Country"
                            value={countryName}
                            onChange={e => setCountryName(e.target.value)} 
                            id="countryName" />
                    </td>

                    <td><label for="goalScored">Number of Goals Scored</label>
                        <input
                            type="number"
                            value={goalScored}
                            placeholder="Goals Scored"
                            onChange={e => setGoalScored(e.target.value)}
                            id="goalScored" />
                    </td>

                    <td><label for="gameDate">Date of Game</label>
                        <input
                            type="date"
                            placeholder="Date of game"
                            value={gameDate}
                            onChange={e => setGameDate(e.target.value)} 
                            id="gameDate" />
                    </td>
                    <td>
                    <label for="submit">Submit Changes:</label>
                        <button
                            type="submit"
                            onClick={addGoal}
                            id="submit"
                        >Add Game</button>
                        </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddGoalPageTable;