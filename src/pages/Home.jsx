import { Box } from '@mui/material'
import Logo from '../assets/logo.png'

function Home() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      })}
    >
      <Box
        component="img"
        src={Logo}
        alt="Centered logo"
        sx={(theme) => ({
          width: '100%',
          maxWidth: 420,
          borderRadius: 3,
          objectFit: 'cover',
          boxShadow: 3,
          mb: 3,
          backgroundColor: theme.palette.background.default,
        })}
      />
    </Box>
  )
}

export default Home