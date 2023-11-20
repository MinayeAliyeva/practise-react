import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    // Diğer kullanıcılar...
  ];

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
