// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';


import EditGoalPageTable from './pages/EditGoalPageTable';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import GoalsPage from './pages/GoalsPage';
import AddGoalPageTable from './pages/AddGoalPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [goalToEdit, setGoalToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Brooke Anderson</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/create" element={<AddGoalPageTable />} />  */
                    <Route path="/update" element={<EditGoalPageTable goalToEdit={goalToEdit} />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/goals" element={<GoalsPage setGoalToEdit={setGoalToEdit} />} /> 
                    <Route path="/" element={<HomePage />} /> 
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Brooke Anderson</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;