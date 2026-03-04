import { Box, Typography } from '@mui/material'
import Background from '../components/atoms/Background'
import Results from '../components/organisms/Results'
import Layout from '../components/atoms/Layout'
import Footer from '../components/organisms/Footer'
import WarningWrapper from '../components/atoms/Warning'

export default function DesktopView() {
  return (
    <Background>
      <Results />
      <Layout>
        <Footer>
          
        </Footer>
      </Layout>
      <WarningWrapper></WarningWrapper>
    </Background>
  )
}

