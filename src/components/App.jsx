import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword/ForgotPassword';
import { Login } from './Login/Login';
// import { PublicRoute } from 'service/PublicRoute/PublicRoute';
import { MyCloud } from './MyCloud/MyCloud';
import { Register } from './Register/Register';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SharedWithMe } from './SharedWithMe/SharedWithMe';
import { SharedWithOthers } from './SharedWithOthers/SharedWithOthers';
import { Favorites } from './Favorites/Favorites';
import { Trash } from './Trash/Trash';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: '15px',
      },
    },
  },
});

export const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="mycloud" element={<MyCloud />} />
            <Route path="shared-with-me" element={<SharedWithMe />} />
            <Route path="shared-with-others" element={<SharedWithOthers />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="trash" element={<Trash />} />
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
      </ChakraProvider>
    </>
  );
};
