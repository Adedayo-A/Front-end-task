import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Invite from "./invite";
import Delete from "./delete";
import Collaborator from "./collaborator";
import Newproject from "./newproject";
import Password from "./password";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Invite} />
      <Route path="/invite" component={Invite} />
      <Route path="/delete" component={Delete} />
      <Route path="/collaborator" component={Collaborator} />
      <Route path="/newproject" component={Newproject} />
      <Route path="/password" component={Password} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
