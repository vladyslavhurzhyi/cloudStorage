import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import imageRegister from '../Register/registerimg.jpeg';

export const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex justifyContent="center" h="100vh" alignItems="center">
        <Box width={[300]} textAlign="center" m="0 auto" mb="15px">
          <Input placeholder="Email" mb="12px" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Password"
              mb="12px"
            />
            <InputRightElement width="4.5rem">
              <Box as="button" onClick={handleClick}>
                {show ? (
                  <ViewOffIcon
                    color="gray.200"
                    _hover={{ color: 'gray.300' }}
                  />
                ) : (
                  <ViewIcon color="gray.200" _hover={{ color: 'gray.300' }} />
                )}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Button color="white" bg="#7173EE" w="100%" mb="19px">
            Login
          </Button>

          <Text mb="10px">
            Don’t have an account yet?{` `}
            <Link style={{ color: 'blue' }} to="/register">
              Create one!
            </Link>
          </Text>
          <Text>
            <Link style={{ color: 'blue' }} to="/forgotpassword">
              Forgot your password?
            </Link>
          </Text>
        </Box>

        <Box
          backgroundImage={`url(${imageRegister})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          w="50%"
          h="100%"
        />
      </Flex>
    </>
  );
};
