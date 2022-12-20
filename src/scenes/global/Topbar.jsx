import { Box, IconButton, useTheme, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React from 'react';


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={1} marginBottom={16}>
      <Box display="flex">
        <Box display="flex" alignItems="center"
          sx={{
            mr: 2,
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          <Link href="/" color="inherit" underline="none">Ege Çakmak</Link>
        </Box>
        <Box display="flex" alignItems="center"
          sx={{
            m: 0,
            fontSize: 18
          }}
        >

          {/* <Link href="/works" sx={{ mr: 0.5, p: 1 }} color="inherit" underline="hover">Works</Link> */}
          {/* <Link href="/posts" sx={{ mr: 0.5, p: 1 }} color="inherit" underline="hover">Posts</Link> */}
          {/* <Link href="/uses" sx={{ p: 1 }} color="inherit" underline="hover">Uses</Link> */}
        </Box>
      </Box>
      <Box display="flex">
      <Link href="https://github.com/egeckmk/egeckmk.com" target="_blank" sx={{ p: 1 }} color="inherit" underline="hover">
            <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
            Source
          </Link>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? (
              <DarkModeOutlinedIcon />
            )
            : (
              <LightModeOutlinedIcon />
            )}
        </IconButton>
      </Box>
    </Box >
  );
}

export default Topbar;