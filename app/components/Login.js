"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
      setError("");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor={
        isSmallScreen ? "linear-gradient(to bottom, #f3c1c1, #f4efc5)" : "white"
      }
    >
      {/* Left Side - Login Form */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        p={5}
        width={isSmallScreen ? "80%" : "40%"}
        height="100%"
        padding={isSmallScreen ? "20px" : "55px"}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" marginBottom="25px"></Box>

        {/* Welcome Back */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
        >
          {isSignUp ? "Create an Account" : "Welcome back!"}
        </Typography>

        {/* Sign Up Link */}
        <Typography variant="body2" fontFamily="Poppins" marginBottom="30px">
          {isSignUp ? "Already have an account? " : "New to Valorant ChatBot? "}
          <Link
            onClick={() => setIsSignUp(!isSignUp)}
            color="#cf4040"
            fontWeight="bold"
            style={{ cursor: "pointer" }}
          >
            {isSignUp ? "Sign in." : "Create an account."}
          </Link>
        </Typography>

        {/* Name Input - Only Show During Sign-Up */}
        {isSignUp && (
          <>
            <Typography
              sx={{
                lineHeight: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Poppins",
              }}
            >
              Name
            </Typography>
            <TextField
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                sx: {
                  fontFamily: "Poppins",
                },
              }}
              InputProps={{
                sx: {
                  fontSize: "14px",
                  borderRadius: "10px",
                  fontFamily: "Poppins",
                  marginBottom: "20px",
                  "& .MuiInputBase-input": {
                    paddingY: "8px",
                  },
                },
              }}
            />
          </>
        )}

        {/* Email Input */}
        <Typography
          sx={{
            lineHeight: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Poppins",
          }}
        >
          Email
        </Typography>
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              fontFamily: "Poppins",
            },
          }}
          InputProps={{
            sx: {
              fontSize: "14px",
              borderRadius: "10px",
              fontFamily: "Poppins",
              marginBottom: "20px",
              "& .MuiInputBase-input": {
                paddingY: "8px",
              },
            },
          }}
        />

        {/* Password Input */}
        <Typography
          sx={{
            lineHeight: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Poppins",
          }}
        >
          Password
        </Typography>
        <TextField
          placeholder="Enter your password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            sx: {
              fontFamily: "Poppins",
            },
          }}
          InputProps={{
            sx: {
              fontSize: "14px",
              borderRadius: "10px",
              fontFamily: "Poppins",
              "& .MuiInputBase-input": {
                paddingY: "8px",
              },
            },
          }}
        />

        {/* Error Message */}
        {error && (
          <Typography
            color="error"
            sx={{ marginBottom: 2, fontFamily: "Poppins", fontWeight: "light" }}
          >
            {error}
          </Typography>
        )}

        {/* Sign In/Sign Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{
            marginTop: 3,
            borderRadius: "10px",
            paddingY: 1.5,
            textTransform: "none",
            fontFamily: "Poppins",
            bgcolor: "#cf4040",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#8a2c2c",
              boxShadow: "none",
            },
          }}
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </Button>
      </Box>

      {/* Right Side - Image/Gradient */}
      {!isSmallScreen && (
        <Box
          width="60%"
          height="100%"
          sx={{
            background: "linear-gradient(to bottom, #f3c1c1,#f4efc5)",
            borderRadius: "20px",
            padding: "55px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
          >
            Introducing
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#cf4040",
              fontFamily: "Poppins",
              marginBottom: "10px",
            }}
          >
            Valorant ChatBot
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              color: "#444444",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Effortlessly navigate your val experience with our AI-driven
            chatbot.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              color: "#444444",
              fontSize: "15px",
              lineHeight: "1.5",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            Whether you need help with strategies to rank up, finding the right
            weapons, or learning more about agents, abilities and gameplay, our
            smart assistant is here to provide instant answers!
          </Typography>
          <img
            src="/assets/about.png"
            alt="Description of image"
            style={{
              maxWidth: "65%",
              maxHeight: "75%",
              display: "block",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Login;
