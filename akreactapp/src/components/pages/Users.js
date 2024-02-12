import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();
  const [searchParams, setSearchParms] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <article>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
          <button onClick={() => setSearchParms({ filter: "active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParms({})}>Reset Users</button>
        </div>
        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing all Users</h2>
        )}
        {/* {users?.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p>No Users</p>
        )} */}
      </article>
    </>
  );
};
export default Users;
