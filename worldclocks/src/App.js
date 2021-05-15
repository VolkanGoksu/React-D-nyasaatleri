import Citys from './components/Citys'
import Clock from './components/Clock'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' component={Citys} exact/>
        <Route path = '/:kita/:yer' component={Clock} />
      </Switch>
    </Router>
   
  )
 }
export default App;
