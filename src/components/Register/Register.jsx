import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import imageRegister from '../Register/registerimg.jpeg';

export const Register = () => {
  const [show, setShow] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  return (
    <>
      <Flex justifyContent="center" h="100vh" alignItems="center">
        <Box width={[300]} textAlign="center" m="0 auto">
          <Input placeholder="Email" mb="12px" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
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
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm password"
              mb="12px"
            />
            <InputRightElement width="4.5rem">
              <Box as="button" onClick={handleClickConfirm}>
                {showConfirm ? (
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
            Create account
          </Button>
          <Text>
            Already have an account?{` `}
            <Link style={{ color: 'blue' }} to="/login">
              Login!
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
