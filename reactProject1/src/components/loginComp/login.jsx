import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import "./login.css";

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input placeholder="customer email" />
        <Input placeholder=" customer password" />
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
