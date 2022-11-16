import { Box, useTheme, Avatar, Container } from '@mui/material'
import { color } from '@mui/system';
import { tokens } from '../../theme';
import Img from '../../images/avatar.jpg';


const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Container maxWidth="sm">
      <Box
        textAlign="center"
        sx={{
          p: 1.5,
          mb: 2.25,
          borderRadius: 1,
          backgroundColor: colors.gray[700],
          color: colors.gray[100]
        }}>
        Hello, I'm an backend developer based in Turkey!
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box sx={{
            fontSize: 30,
            fontWeight: "bold",
          }}>Ege Çakmak</Box>
          <Box sx={{
            fontSize: 16,
          }}>Backend Developer / Software Enginier</Box>
        </Box>
        <Avatar
          alt="avatar"
          src={Img}
          sx={{ width: 96, height: 96 }}
        />
      </Box>
      <Box sx={{
        fontSize: 20,
        textDecorationLine: "underline",
        mt: 1.5,
        mb: 2
      }}>
        Bio
      </Box>
      <Box display="flex">
        <Box sx={{ mr: 2, fontWeight: "bold", fontSize: 16 }} >1996</Box>
        <Box sx={{ fontSize: 16, color: colors.gray[200] }}>Born in Aydin, Turkey.</Box>
      </Box>

      <Box display="flex">
        <Box sx={{ mr: 2, fontWeight: "bold", fontSize: 16 }} >2021</Box>
        <Box sx={{ fontSize: 16, color: colors.gray[200] }}>Completed the undergraduate education in the Computer Engineer at Suleyman Demirel University.</Box>
      </Box>

      <Box display="flex">
        <Box sx={{ mr: 2, fontWeight: "bold", fontSize: 16, minWidth: "max-content" }} >2021 to present</Box>
        <Box sx={{ fontSize: 16, color: colors.gray[200] }}>Working as a Software Developer at Pronovuma Bilişim Teknoloji A.Ş. Izmir, Turkey</Box>
      </Box>
    </Container >
  );
}

export default Dashboard;