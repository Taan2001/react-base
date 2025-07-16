import React from "react";
import { Button } from "../../components"; 

function HomePage(): React.JSX.Element {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Button />
    </div>
  );
}

export default HomePage;