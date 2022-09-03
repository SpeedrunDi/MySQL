import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";
import FullPost from "./containers/FullPost/FullPost";
import AddPost from "./containers/AddPost/AddPost";

const App = () => (
  <Switch>
    <Route path="/" exact component={News}/>
    <Route path="/new-post" component={AddPost}/>
    <Route path="/news/:id" component={FullPost}/>
  </Switch>
);

export default App;
