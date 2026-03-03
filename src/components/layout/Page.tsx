import Box from '@mui/joy/Box';
import React from 'react';

import Theme from '../utils/Theme';

import type { PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {

  return (
    <Theme>

        <Box
        sx={{
            minHeight: '100svh',
            maxWidth: '100svw',
            alignItems: 'center',
            justifyContent: 'center',

            padding: 0,

            // setting to grid somehow makes the child 100% height and height: 100% doesnt lol
            display: 'grid',
        }}
        >
          
        {children}
        </Box>
    </Theme>
  );
}