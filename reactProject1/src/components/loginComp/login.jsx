import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="customer email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" customer password"
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={15}
        >
          <Button type="submit">Login</Button>
          <Button type="submit">New Member</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
