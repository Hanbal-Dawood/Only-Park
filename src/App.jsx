// src/App.js
import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import WelcomePage from './components/WelcomePage';
import { NavigationContext } from './components/NavigationContext';

function App() {
  const { page, goToPage } = useContext(NavigationContext);

  const [userName, setUserName] = useState('');
  const [selectedCarPark, setSelectedCarPark] = useState('');

  return (
    <div>
      {page === 'signin' && (
        <SignIn
          goToForgotPassword={() => goToPage('forgotpassword')}
          onSignIn={(name) => {
            setUserName(name);
            goToPage('welcome');
          }}
        />
      )}
      {page === 'forgotpassword' && <ForgotPassword goBack={() => goToPage('signin')} />}
      {page === 'welcome' && (
        <WelcomePage
          userName={userName}
          selectedCarPark={selectedCarPark}
        />
      )}
    </div>
  );
}

export default App;
