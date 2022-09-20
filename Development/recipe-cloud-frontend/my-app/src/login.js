import React, { useState } from "react";

export default function Login() {
  return (
    <div classname="loggedIn">
      <form>
        <label>
          <input type="text" username="username" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
