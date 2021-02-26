
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/common/navigation';
import LandingPage from './pages/landing';
import PageOne from './pages/pageOne';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});
theme = responsiveFontSizes(theme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Navigation>
      <Switch>
        <Route path='/one' component={PageOne} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </Navigation>
  </MuiThemeProvider>
);

export default App;
