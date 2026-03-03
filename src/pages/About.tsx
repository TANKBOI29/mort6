import { Typography, Box, List, ListItem, ListItemText } from '@mui/material'

function About() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        About
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        This is a modern website built with the latest web technologies.
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        It features:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="React for the UI framework" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Vite for fast development and building" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tailwind CSS for styling" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material-UI (MUI) for component library" />
        </ListItem>
        <ListItem>
          <ListItemText primary="React Router for navigation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="TypeScript for type safety" />
        </ListItem>
      </List>
    </Box>
  )
}

export default About
