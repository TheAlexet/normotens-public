import { Box, Container, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import privacyPolicyMarkdown from '../content/privacy-policy.md?raw'

function PrivacyPolicy() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
        py: 6,
        px: 2,
      })}
    >
      <Container maxWidth="md">
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRadius: 3,
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
          })}
        >
          <Typography variant="h3" gutterBottom>
            Privacy Policy
          </Typography>

          <Box
            sx={{
                '& h1': { display: 'none' },

                '& h2': {
                mt: 2.5,
                mb: 0.5,
                fontSize: '1.3rem',
                fontWeight: 700,
                lineHeight: 1.3,
                },

                '& h3': {
                mt: 2,
                mb: 0.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                lineHeight: 1.3,
                },

                '& p': {
                mt: 0,
                mb: 1,
                lineHeight: 1.55,
                },

                '& h2 + p, & h3 + p': {
                mt: 0,
                },

                '& ul, & ol': {
                mt: 0.5,
                mb: 1,
                pl: 3,
                },

                '& li': {
                mb: 0.4,
                lineHeight: 1.55,
                },

                '& strong': {
                fontWeight: 700,
                },
            }}
            >
            <ReactMarkdown>{privacyPolicyMarkdown}</ReactMarkdown>
            </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy