import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <App />

    </AuthProvider>

    
  </StrictMode>,
)
























// import { StrictMode, } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { AuthProvider } from './context/AuthContext.jsx';

// // Function to check and apply theme from localStorage
// const applyThemeFromLocalStorage = () => {
//   const savedTheme = localStorage.getItem('darkMode');
//   if (savedTheme === 'true') {
//     document.body.classList.add('dark');
//   } else {
//     document.body.classList.remove('dark');
//   }
// };

// applyThemeFromLocalStorage(); // Apply the theme on load

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </StrictMode>


