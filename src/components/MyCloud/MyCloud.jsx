import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import profileImage from './logo192.png';
import { NoFilesOrFolders } from './NoFilesOrFolders/NoFilesOrFolders';

export const MyCloud = () => {
  return (
    <>
      <Box>
        <Box
          display={'flex'}
          margin="40px 40px 40px "
          gap="10px"
          justifyContent={'space-between'}
        >
          <Input
            placeholder="Search files..."
            maxW={'550px'}
            background={'rgba(246, 246, 252, 1)'}
            color={'A0AEC0'}
            fontWeight={'500'}
            fontSize={'16px'}
          />
          <Box display={'flex'}>
            <Button color="white" bg="#7173EE" w={'123px'} fontWeight="500">
              Add file
            </Button>

            {/* <input
              type="file"
              id="file-input"
              multiple
              style={{ display: 'none' }}
            />
            <Button
              color="white"
              bg="#7173EE"
              w={'123px'}
              fontWeight="500"
              onClick={() => {
                const fileInput = document.getElementById('file-input');
                fileInput.click();
                const files = fileInput.files;
              }}
            >
              Add files
            </Button> */}

            <button style={{ display: 'flex', height: '40px' }}>
              <Image
                ml={'30'}
                src={profileImage}
                alt="profile"
                borderRadius={'full'}
                w="40px"
                h="40px"
                border={'1px solid black'}
              />
            </button>
          </Box>
        </Box>
        <NoFilesOrFolders />
      </Box>
    </>
  );
};
