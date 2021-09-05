import './App.scss';
import { Toolbar } from './components/Toolbar/Toolbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Router } from './routes/index'
import { useTranslation } from 'react-i18next';
import { Login } from './components/auth/Login/Login'
import {Register} from './components/auth/Register/Register'
import { AllWebsites } from './pages/AllWebsites/AllWebsites'
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact />
          <Route component={Register} path="/register" exact />
          <Route component={AllWebsites} path='/allwebsites' exact/>
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
    </BrowserRouter>
    </div >
  );
}

export default App;
