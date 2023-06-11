import { useToast, Spinner, Center } from '@chakra-ui/react';
import { useRouter, Router } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { pautaformaApi } from '../services/pautaforma';
import { IUser } from '../types/User';
import { route_names } from '../utils/route_names';

interface ILoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface IAuthContextData {
  handleSignIn(loginData: ILoginData): Promise<void>;
  handleSignOut(): Promise<void>;
  // user: IUser;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export function AuthProvider(props: IAuthProviderProps) {
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const tokenLocalStorage = localStorage.getItem(
        'PAUTAFORMA::TOKEN'
      );

      if (!tokenLocalStorage) return '';

      return tokenLocalStorage;
    }

    return '';
  });
  // const [user, setUser] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     const userLocalStorage = localStorage.getItem(
  //       'PAUTAFORMA::USER'
  //     );
  //     console.log(userLocalStorage)
  //     if (!userLocalStorage) return '';
  //     // return JSON.parse(userLocalStorage);
  //   }

  //   return {};
  // });

  useEffect(() => {
    authInitialRouteForUser();
  }, []);

  const authInitialRouteForUser = async () => {
    if (!token) {
      setToken('');
      // setUser({});
      setIsLoading(false);
      return router.push(route_names.login.href);
    }

    try {
      pautaformaApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
      await pautaformaApi.put('/token');
      setIsLoading(false);

      if (router.pathname === '/auth/login') {
        await router.push(route_names.pautaforma.cursos.href);
      }
    } catch (error) {
      localStorage.removeItem('PAUTAFORMA::TOKEN');
      // localStorage.removeItem('PAUTAFORMA::USER');
      setToken('');
      // setUser({});
      return router
        .push(route_names.login.href)
        .finally(() => setIsLoading(false));
    }
  };

  const handleSignIn = useCallback(
    async ({ email, password, rememberMe }: ILoginData) => {
      try {
        const response = await pautaformaApi.post<IUser>('/token', {
          email,
          password,
        });
        localStorage.setItem(
          'PAUTAFORMA::TOKEN',
          response.data.access_token
        );
        // localStorage.setItem(
        //   'PAUTAFORMA::USER',
        //   JSON.stringify(response.data.user)
        // );

        if (rememberMe) {
          localStorage.setItem('PAUTAFORMA::EMAIL', email);
        }
        if (!rememberMe) {
          localStorage.removeItem('PAUTAFORMA::EMAIL');
        }

        pautaformaApi.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.access_token}`;

        await router.push(route_names.pautaforma.cursos.href);
      } catch (e) {
        console.log(e);
        toast({
          title: 'Email ou Senha inválidos',
          status: 'error',
          position: 'top-left',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    []
  );

  const handleSignOut = useCallback(async () => {
    localStorage.removeItem('PAUTAFORMA::TOKEN');
    // localStorage.removeItem('PAUTAFORMA::USER');
    pautaformaApi.defaults.headers.common['Authorization'] = '';
    setToken('');
    // setUser({});
    await router.push(route_names.login.href);
  }, []);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue" />
      </Center>
    );
  }

  return (
    <AuthContext.Provider
      value={{ handleSignIn, handleSignOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
