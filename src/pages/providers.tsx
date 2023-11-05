'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { NearSocialBridgeProvider } from 'near-social-bridge';
import 'near-social-bridge/near-social-bridge.css';

import { AppWrapper } from '../context/state';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NearSocialBridgeProvider>
      <AppWrapper>
        <ChakraProvider>{children}</ChakraProvider>
      </AppWrapper>
    </NearSocialBridgeProvider>
  );
}

export default Providers;
