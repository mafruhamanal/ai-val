import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Navbar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", paddingX: "5px" }}>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
          >
            Val ChatBot
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff8585",
            borderRadius: "10px",
            fontFamily: "Poppins",
            textTransform: "none",
            boxShadow: "none",
            padding: "8px 25px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#8a2d2d",
              boxShadow: "none",
            },
          }}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
