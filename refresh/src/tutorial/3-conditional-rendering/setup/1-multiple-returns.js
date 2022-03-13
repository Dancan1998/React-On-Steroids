import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUser = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const user = await response.json();
    if (user) {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
