import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGoalPageTable = ({ goalToEdit }) => {

    const [countryName, setCountryName]       = useState(goalToEdit.countryName);
    const [goalScored, setGoalScored]         = useState(goalToEdit.goalScored);
    const [gameDate, setGameDate]             = useState(goalToEdit.gameDate);
    
    const redirect = useNavigate();      

    const editGoal = async () => {
        const response = await fetch(`/goals/${goalToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify( {
                countryName: countryName,
                goalScored: goalScored,
                gameDate: gameDate,
            }
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert(`The game information was changed successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`The game information was not edited. Please try again. Error = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/goals");
    }

    return (
        <>
        <article>
            <h2>Edit a game</h2>
            <p>Edit the country name, number of goals, or date of the game from the 2023 FIFA Women's World Cup.</p>

            <table id="goals">
                <caption><strong>What do you want to edit on this game?</strong></caption>
                <thead>
                    <tr>
                        <th>Add New Game</th>
                        <th>Name of Country</th>
                        <th>Number of Goals Scored</th>
                        <th>Date of Game</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                <td><label for="countryName">Country Name</label>
                        <input
                            type="text"
                            value={countryName}
                            onChange={e => setCountryName(e.target.value)} 
                            id="countryName" />
                    </td>

                    <td><label for="goalScored">Number of Goals Scored</label>
                        <input
                            type="number"
                            value={goalScored}
                            onChange={e => setGoalScored(e.target.value)} 
                            id="goalScored" />
                    </td>

                    <td><label for="gameDate">Date of Game (YYYY-MM-DD)</label>
                        <input
                            type="date"
                            value={gameDate.slice(0,10)}
                            onChange={e => setGameDate(e.target.value)} 
                            id="gameDate" />
                    </td>

                    <td>
                    <label for="submit">Submit Changes:</label>
                        <button
                            type="submit"
                            onClick={editGoal}
                            id="submit"
                        >Save
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditGoalPageTable;