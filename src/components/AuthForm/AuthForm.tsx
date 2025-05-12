import { Box, Paper, Typography, useTheme } from "@mui/material";

type TAuthFormProps={
    title:string,
    children:React.ReactNode,
    onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}
const AuthForm = ({title,children,onSubmit}:TAuthFormProps) => {
      const { palette } = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        my: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          width: { xs: "90%", md: "40%" },
          padding: "30px",
        }}
        elevation={14}
      >
        <Typography
          variant="h6"
          component="h2"
          color={palette.primary.main}
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "100%", mb: 3, mt: 1 },
          }}
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  )
}

export default AuthForm