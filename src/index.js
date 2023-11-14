import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    // Imports react-router
import Home from './routes/Home';
import Workouts from './routes/Workouts'
import {FaArrowUp} from "react-icons/fa"
import Monday from './routes/trainingDays/Monday';
// root => point to rood id
// <App /> 

// We need to wrap our application inside <Router>..</Router>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="home"    element={<Home />} />
          <Route path="workout" element={<Workouts />} >
            {" "}
            <Route path="monday" element={<Monday />} />

            <Route index 
              element={<main className="card bg-orange m-3">
                <h5 className='text-white p=1 d-flex justify-content-around align-items-center'>
                  <FaArrowUp />
                  Choose a workout day!
                  <FaArrowUp />
                </h5>
              </main>} />

          </Route>
          <Route 
            path="*" 
            element={
              <main>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>

    </Router>
  </React.StrictMode>
)


//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="" element={ <App />}>
//           <Route path="home" element={<Home />} />
//         </Routes>
//     </Router>
//   </React.StrictMode>
// );
