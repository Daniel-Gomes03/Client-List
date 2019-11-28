import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Snackbar from '../../../components/Snackbars';

import api from '../../../services/api';

import useStyles from '../styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Insira seu e-mail'),
  password: Yup.string().required('Informe sua senha'),
});

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Circuito Penedo de Cinema. Todos os direitos reservados. '}
    </Typography>
  );
}

export default function SignIn({ history }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function renderRedirect() {
    return <Redirect to="/" />;
  }

  async function onSubmit(values) {
    try {
      setLoad(true);

      const response = await api.post('sessions', values);

      if (response.data.user.role !== 'admin') {
        setLoad(false);
        setOpen(true);
        setErrorMessage('Você não tem permissão para acessar esta área.');
      } else {
        localStorage.setItem('@cpc:token', response.data.token);
        localStorage.setItem('@cpc:user', JSON.stringify(response.data.user));

        setLoad(false);

        history.push('/');
      }
    } catch (error) {
      setLoad(false);
      setOpen(true);
      setErrorMessage('Falha na autenticação, verifique seus dados.');
    }
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return localStorage.getItem('@cpc:token') ? (
    renderRedirect()
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Acessar Plataforma
        </Typography>

        <Formik validationSchema={validationSchema} onSubmit={onSubmit}>
          {props => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
            } = props;

            return (
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  autoFocus
                  helperText={touched.email ? errors.email : ''}
                  error={touched.email && Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  helperText={touched.password ? errors.password : ''}
                  error={touched.password && Boolean(errors.password)}
                  value={values.password}
                  onChange={handleChange}
                />

                <Grid container justify="center">
                  {load ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Entrar
                    </Button>
                  )}
                </Grid>
              </form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>

      <Snackbar
        open={open}
        handleClose={handleClose}
        variant="error"
        message={errorMessage}
      />
    </Container>
  );
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
