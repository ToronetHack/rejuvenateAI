'use client';
import { createContext, useContext, useState } from 'react';
import { stateContextType } from '../types/state';
import { useAccount, useNetwork, useWalletClient } from 'wagmi';

const contextDefaultValue: stateContextType = {
  allTokensData: {},
  address: '',
  setAllTokenData: () => null,
  setAddress: () => null,
  loading: false,
  setLoading: () => null,
  isUserConnected: false,
  setIsUserConnected: () => null,
  user: {},
  setUser: () => null,
};

type StateContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<stateContextType>(contextDefaultValue);

export function AppWrapper({ children }: StateContextProviderProps) {
  const [allTokensData, setAllTokenData] = useState<any>({
    userNftUri: 'bafkreihfweuclvhaozl7q6zsjjyrkh262vlbzqyd5m3lijrnjefh6pxy3i',
    nutritionistNftUri: '',
  });
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isUserConnected, setIsUserConnected] = useState<boolean>(false);

  const [user, setUser] = useState({
    userAddress: '',
    name: '',
    userCidData: '',
    startDate: '',
    endDate: '',
    amount: '',
  });
  const [nutritionist, setNutritionist] = useState('');

  let sharedState = {
    allTokensData,
    setAllTokenData,
    address,
    setAddress,
    loading,
    setLoading,
    isUserConnected,
    setIsUserConnected,
    user,
    setUser
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
