import { Box, Text } from '@chakra-ui/react';

export const ProgressBar = ({ amoutUsedData, limit = 10 }) => {
  return (
    <Box
      w={'229px'}
      h={'5px'}
      bgColor={'#FFFFFF2B'}
      borderRadius={'10px'}
      marginTop={'auto'}
      marginLeft={'15px'}
    >
      <Box
        height={'100%'}
        bgColor={'white'}
        borderRadius={'10px'}
        mb={'10px'}
        w={amoutUsedData * 10 + '%'}
      ></Box>
      <Text color={'white'}>
        {amoutUsedData} GB of {limit} GB used
      </Text>
    </Box>
  );
};
