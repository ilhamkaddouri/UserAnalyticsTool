import './App.scss';
import { useState, useEffect } from 'react'
import { Toolbar } from './components/Toolbar/Toolbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Router } from './routes/index'
import { useTranslation } from 'react-i18next';
import { Login } from './components/auth/Login/Login'
import { Register } from './components/auth/Register/Register'
import { AllWebsites } from './pages/AllWebsites/AllWebsites'
import UserContext from "./context/UserContext";
import { verifyToken, getVerify } from './services/authService'
function App() {
  const { t, i18n } = useTranslation();
  const [userInfo, setUserInfo] = useState({});

  const [userData, setUserData] = useState({
    token: '',
    user: '', //user
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await verifyToken(token)

      if (tokenRes.data) {
        const userRes = await getVerify(token)
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" exact />
            <Route component={AllWebsites} path='/allwebsites' exact />
            <>
              <Toolbar />
              <div className="app__container">
                <Sidebar />
                <div className='pages__container'>
                  <Router>
                    {t('Dashboard.title')}
                  </Router>
                </div>
              </div>
            </>

          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
