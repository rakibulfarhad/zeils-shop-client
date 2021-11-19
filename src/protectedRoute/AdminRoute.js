import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import useContexts from "../hooks/useContexts.js";

function AdminRoute(props) {
  const { children, ...rest } = props;
  const { email } = useContexts();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://limitless-savannah-06246.herokuapp.com/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(user);
        setLoading(false);
      });
  }, [email]);
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <h6>Loading...</h6>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
