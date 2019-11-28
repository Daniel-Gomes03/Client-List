import 'date-fns';
import brLocale from 'date-fns/locale/pt-BR';

import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Paper,
  TextField,
  Grid,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Snackbar from '../../components/Snackbars';

import api from '../../services/api';
import Layout from '../../components/Layout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 4, 1, 2),
  },
  title: {
    margin: theme.spacing(1),
    color: '#333',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(2, 1),
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Informe o nome'),
  cpf: Yup.string().required('Informe o cargo'),
  address: Yup.string().required('Informe o endereço'),
  number: Yup.string().required('Informe o número'),
  neighborhood: Yup.string().required('Informe o bairro'),
  city: Yup.string().required('Informe a cidade'),
  state: Yup.string().required('Informe o estado'),
  email: Yup.string(),
  phone: Yup.string().required('Informe o telefone'),
});

export default function ClientForm({ match, history }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [client, setClient] = useState({
    name: '',
    cpf: '',
    address: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    email: '',
    phone: '',
  });

  async function loadClients() {
    const { id } = match.params;

    const response = await api.get(`client/${id}`);

    console.log(response.data);

    setClient(response.data);
  }

  useEffect(() => {
    if (match.params.id) {
      loadClients();
    }
  }, [match.params.id]);

  async function onSubmit(values, { resetForm }) {
    setLoad(true);

    const token = localStorage.getItem('@clientList:token');

    const response = await api.postOrPut('client', match.params.id, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setLoad(false);

    setOpen(true);

    resetForm();

    history.push('/');
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Layout title="Clientes">
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
        <Paper>
          <Grid
            container
            justify="center"
            direction="column"
            className={classes.root}
          >
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                {match.params.id ? 'Editar Cliente' : 'Adicionar Cliente'}
              </Typography>
            </Grid>
          </Grid>

          <Formik
            initialValues={{
              name: client.name,
              cpf: client.cpf,
              address: client.address,
              number: client.number,
              neighborhood: client.neighborhood,
              city: client.city,
              state: client.state,
              email: client.email,
              phone: client.phone,
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {props => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
              } = props;

              return (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    justify="center"
                    direction="column"
                    className={classes.root}
                  >
                    <Grid item style={{ width: '100%' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <TextField
                            name="name"
                            label="Nome  do Cliente"
                            helperText={touched.name ? errors.name : ''}
                            error={touched.name && Boolean(errors.name)}
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            name="cpf"
                            label="CPF"
                            helperText={touched.cpf ? errors.cpf : ''}
                            error={touched.cpf && Boolean(errors.cpf)}
                            className={classes.textField}
                            value={values.cpf}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            name="address"
                            label="Rua"
                            helperText={touched.address ? errors.address : ''}
                            error={touched.address && Boolean(errors.address)}
                            className={classes.textField}
                            value={values.address}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            name="number"
                            label="Número"
                            helperText={touched.number ? errors.number : ''}
                            error={touched.number && Boolean(errors.number)}
                            className={classes.textField}
                            value={values.number}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name="neighborhood"
                            label="Bairro"
                            helperText={
                              touched.neighborhood ? errors.neighborhood : ''
                            }
                            error={
                              touched.neighborhood &&
                              Boolean(errors.neighborhood)
                            }
                            className={classes.textField}
                            value={values.neighborhood}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name="city"
                            label="Cidade"
                            helperText={touched.city ? errors.city : ''}
                            error={touched.city && Boolean(errors.city)}
                            className={classes.textField}
                            value={values.city}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name="state"
                            label="Estado"
                            helperText={touched.state ? errors.state : ''}
                            error={touched.state && Boolean(errors.state)}
                            className={classes.textField}
                            value={values.state}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            name="email"
                            label="Email"
                            helperText={touched.email ? errors.email : ''}
                            error={touched.email && Boolean(errors.email)}
                            className={classes.textField}
                            value={values.email}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            name="phone"
                            label="Telefone de contato"
                            helperText={touched.phone ? errors.phone : ''}
                            error={touched.phone && Boolean(errors.phone)}
                            className={classes.textField}
                            value={values.phone}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item>
                      {load ? (
                        <CircularProgress className={classes.progress} />
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          type="submit"
                        >
                          Salvar
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>

          <Snackbar
            open={open}
            handleClose={handleClose}
            variant="success"
            message="Cliente cadastrado com sucesso!"
          />
        </Paper>
      </MuiPickersUtilsProvider>
    </Layout>
  );
}
