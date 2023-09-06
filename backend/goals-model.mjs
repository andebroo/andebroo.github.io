// Models for the Goals Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Error 500: The database connection was unsucessful.' });
    } else  {
        console.log('The MongoDB Goals database connection was successful!.');
    }
});

// SCHEMA: Define the collection's schema.
const goalSchema = mongoose.Schema({
	countryName:    { type: String, required: true },
	goalScored:     { type: Number, required: true , min:[0, 'Negative or empty values are not permitted.']},
	gameDate:       { type: Date, required: true}
});


// Compile the model from the schema 
// by defining the collection name "goals".
const goals = mongoose.model('Goal', goalSchema);


// CREATE model *****************************************
const createGoal = async (countryName, goalScored, gameDate) => {
    const goal = new goals({ 
        countryName: countryName, 
        goalScored: goalScored, 
        gameDate: gameDate 
    });
    return goal.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveGoals = async () => {
    const query = goals.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGoalByID = async (_id) => {
    const query = goals.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGoalById = async (_id) => {
    const result = await goals.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGoal = async (_id, countryName, goalScored, gameDate) => {
    const result = await goals.replaceOne({_id: _id }, {
        countryName: countryName,
        goalScored: goalScored,
        gameDate: gameDate
    });
    return { 
        _id: _id, 
        countryName: countryName,
        goalScored: goalScored,
        gameDate: gameDate
    }
}

// EXPORT the variables for use in the controller file.
export { createGoal, retrieveGoals, retrieveGoalByID, updateGoal, deleteGoalById }