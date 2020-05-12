import { Router } from 'next/router';
import { useState } from 'react';
import { Heading, Box, FormLabel, Input, Button, Stack } from '@chakra-ui/core';
import useRequest from '../../hooks/use-request';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Heading as="h2">Create an Account</Heading>
      {errors}
      <Stack my={2}>
        <Box>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="solid" variantColor="blue">
          Signup
        </Button>
      </Stack>
    </form>
  );
};

export default SignUp;
