import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Text, Box, Flex } from '@chakra-ui/react';

import imageRegister from '../Register/registerimg.jpeg';

export const ForgotPassword = () => {
  return (
    <>
      <Flex justifyContent="center" h="100vh" alignItems="center">
        <Box width={[300]} textAlign="center" m="0 auto">
          <Input placeholder="Email" mb="12px" h={'48px'} />
          <Button
            h={'48px'}
            color="white"
            bg="#7173EE"
            w="100%"
            mb="19px"
            fontSize="18px"
            fontWeight="500"
          >
            Reset password
          </Button>
          <Text>
            Remember password?{` `}
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
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
    </>
  );
};
