import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Text, Box, Flex } from '@chakra-ui/react';

import imageRegister from '../Register/registerimg.jpeg';

export const ForgotPassword = () => {
  return (
    <>
      <Flex justifyContent="center" h="100vh" alignItems="center">
        <Box width={[300]} textAlign="center" m="0 auto">
          <Input placeholder="Email" mb="12px" />
          <Button color="white" bg="#7173EE" w="100%" mb="19px">
            Восстановить пароль
          </Button>
          <Text>
            Вспомнил пароль?{` `}
            <Link style={{ color: 'blue' }} to="/login">
              Залогинься!
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
