import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";

const App = () => (
  <Switch>
    <Route path="/" exact component={News}/>
  </Switch>
);

export default App;
