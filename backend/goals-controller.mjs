// Controllers for the Goal Collection

import 'dotenv/config';
import express from 'express';
import * as goals from './goals-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/goals', (req,res) => { 
    goals.createGoal(
        req.body.countryName, 
        req.body.goalScored, 
        req.body.gameDate
        )
        .then(goal => {
            res.status(201).json(goal);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The request to create a goal statistic failed. Please check the provided information and try again.' });
        });
});

// RETRIEVE controller ****************************************************
app.get('/goals', (req, res) => {
    goals.retrieveGoals()
        .then(goal => { 
            if (goal !== null) {
                res.json(goal);
            } else {
                res.status(404).json({ Error: 'The goal statistic was not found in the database. Please provide the valid goal information and try again.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The request to retrieve the goal statistic was unsuccessful. The goal was not found due to an error with the server or database. Please provide the valid goal information and try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/goals/:_id', (req, res) => {
    goals.retrieveGoalByID(req.params._id)
    .then(goal => { 
        if (goal !== null) {
            res.json(goal);
        } else {
            res.status(404).json({ Error: 'The ID was not found in the MongoDB Goals database. Please check the provided ID and try again.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The request to retrieve the goal statistic was unsuccessful. The ID was not found due to an error with the server or database. Please provide the valid information and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/goals/:_id', (req, res) => {
    goals.updateGoal(
        req.params._id, 
        req.body.countryName, 
        req.body.goalScored, 
        req.body.gameDate
    )
    .then(goal => {
        res.json(goal);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The update was unsuccessful. The goal statistic was not updated due to an error with the server or database. Please provide the valid information and try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/goals/:_id', (req, res) => {
    goals.deleteGoalById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'The goal statistic was deleted successfully from the database.' });
            } else {
                res.status(404).json({ Error: 'The request was unsuccessful. The goal was not found due to an error with the server or database. Please provide the valid information and try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The update was unsuccessful. Please provide the valid information and try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});