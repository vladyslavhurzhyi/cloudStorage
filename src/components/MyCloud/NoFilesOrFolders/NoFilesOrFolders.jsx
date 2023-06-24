import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import emptyFolder from './MyCloudEmptyFolder.jpg';

export const NoFilesOrFolders = () => {
  return (
    <>
      <Box
        maxW={'450px'}
        height={'310px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        margin={'auto'}
      >
        <Image src={emptyFolder} alt="No files" />
        <Heading fontSize={'20px'} lineHeight={'26px'}>
          No files or folders uploaded yet
        </Heading>
        <Text fontSize={'16px'} lineHeight={'20px'}>
          Drag and drop files or folders here or press the button below
        </Text>
        <Button bgColor={'#7173EE'} color={'white'} flexShrink={'0'}>
          Upload
        </Button>
      </Box>
    </>
  );
};
