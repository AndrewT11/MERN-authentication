import React, { useState } from "react";

//Material UI
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label>
      </div>
      <div className="form-group">
        <TextField
          size="small"
          variant="outlined"
          className="form-control"
          label="E-mail"
          //these two are needed for useState to have an email value and set the new email value.
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <FormControl variant="outlined" size="small" className="form-control">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            label="Password"
            // this allows for hiding and showing password. Text will show the password. Password shows the filled dots. onChange will occur when password is changed. useState for showPassowrd is done in the Icon Button, where we useState to switch showPassword from true/false
            type={showPassword ? "text" : "password"}
            //similarly to email, this will allow you to type a password and anything you type will be the new state that is set to password.
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment>
                <IconButton
                  edge="end"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="text-center mt-4">
        {/* With value and onChange set in textfield for email and outlinedinput for password, submit will now enable or disable based on if the above fields are filled or not. */}
        <Button variant="contained" disabled={!email || !password}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
