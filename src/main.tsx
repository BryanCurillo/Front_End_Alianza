import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import FichaPersonal from './views/FichaPersonal.tsx'
import FichaFamiliar from './views/FichaFamiliar.tsx'
import './index.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

// layout
import "primeflex/primeflex.css";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='mainDiv'>
      <App />
      <FichaPersonal />
      {/* <FichaFamiliar></FichaFamiliar> */}
    </div>
    


  </React.StrictMode>,
)
