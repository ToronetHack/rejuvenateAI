'use client';

import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';

import { AppWrapper } from '../context/state';
import ChakraProviders from '@/providers/chakra-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
   
      <AppWrapper>
        <ChakraProviders>{children}</ChakraProviders>
      </AppWrapper>
  
  );
}

export default Providers;
