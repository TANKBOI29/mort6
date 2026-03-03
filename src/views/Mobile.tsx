import Page from '../components/layout/Page'
import { Box, Typography } from '@mui/material'

export default function MobileView() {
    return (
    <>
        <head>
            <title>No Mobile Support</title>
            <meta name="description" content="No Mobile Support" />
            <meta name="keywords" content="No Mobile Support" />
        </head>

        <Page>
            <Box>
                <Typography 
                variant="h4"
                sx={{ textAlign: 'center' }}
                color="black"
                align="center"
                >No Mobile Support</Typography>
            </Box>
        </Page>
    </>
      
    )
  }