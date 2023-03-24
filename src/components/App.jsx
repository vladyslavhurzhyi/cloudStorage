import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword/ForgotPassword';
import { Login } from './Login/Login';
// import { PublicRoute } from 'service/PublicRoute/PublicRoute';
import { MyCloud } from './MyCloud/MyCloud';
import { Register } from './Register/Register';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

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
          {/* SharedLayout  */}
          <Route path="/" element={<SharedLayout />}>
            <Route path="/dashboard" element={<MyCloud />} />

            {/* SharedLayout  */}
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
      </ChakraProvider>
    </>
  );
};
