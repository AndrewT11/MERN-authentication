client {
Boot strap
Included files:
Into index.html:
in head: Bootstrap CSS

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    under body, before html end: Biitstrap JS
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

    installs:
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
    npm i react-router-dom --save

    bootstrap navbar

    login component =
    import React, { useState } from 'react';
    import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    FormHelperText
    } from "@mui/material";
    import VisibilityIcon from '@mui/icons-material/Visibility';
    import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

}

server {
"dependencies": {
"cookie-parser": "^1.4.6",
"cors": "^2.8.5",
"crypto": "^1.0.1",
"dotenv": "^16.0.1",
"express": "^4.18.1",
"express-validator": "^6.14.1",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.3.6",
"morgan": "^1.10.0",
"nodemon": "^2.0.16",
"uuidv1": "^1.6.14"
}
}
