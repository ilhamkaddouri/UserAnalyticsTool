import './App.scss';
import {Toolbar} from './components/Toolbar/Toolbar'
import {Sidebar} from './components/Sidebar/Sidebar'
import {BrowserRouter} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import {Router} from './routes/index'
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <BrowserRouter>
      <Toolbar/>
      <div className="app__container">
        <Sidebar/>
          <div className='pages__container'>
          <Router>
            {t('Dashboard.title')}
          </Router>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
