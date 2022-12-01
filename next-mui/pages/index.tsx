import { Box, Button, Grid, Paper, styled } from "@mui/material";
import SkeletonAnimations from "../components/skeleton-animation";
import MuiTypography from "../components/typography";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <MuiTypography />
      <SkeletonAnimations />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
