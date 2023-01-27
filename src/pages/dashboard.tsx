import authenticated from "@layouts/authenticated";
import React from "react";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <button
        className="text-black"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default authenticated(Dashboard);
