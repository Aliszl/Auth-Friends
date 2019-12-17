import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import Friends from "./Friends";
import addFriendForm from "./AddFriend";

export function Container(props) {
  const onLogout = () => {
    // 1- We need to flush token from local storage
    localStorage.removeItem("token");
    // 2- We need to redirect users to login route props.history
    props.history.push("/");
  };

  return (
    <div className="container">
      <nav>
        <span>
          <NavLink exact to="/">
            Login
          </NavLink>

          <button onClick={onLogout}>Logout</button>
          <br />
          <br />
          <NavLink to="/add_friend">Add Friend</NavLink>
          <br />
          <br />
          <NavLink to="/friends">Friends</NavLink>
          <br />
          <br />
        </span>
      </nav>

      <main>
        <Route exact path="/" component={Login} />

        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/add_friend" component={addFriendForm} />

        {/* (OPTION B) Create a secure Route for Quotes.
          Alternatively, we could have the Quotes component
          itself handle the redirect if no token. */}
        {/* <Route
            exact
            path='/add_friend'
            render={props => withAuthCheck(addFriendForm, props)}
          /> */}
      </main>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

function withAuthCheck(Component, props) {
  // if token render component passing props to it
  // otherwise use the Redirect to bounce you away
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(Container);
