import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import api from '../../services/api';

import Layout from '../../components/Layout';
import Table from './Table';

export default function Client({ history }) {
  const [client, setClient] = useState([]);

  function createData(
    id,
    name,
    cpf,
    address,
    number,
    neighborhood,
    city,
    state,
    email,
    phone
  ) {
    return {
      id,
      name,
      cpf,
      address,
      number,
      neighborhood,
      city,
      state,
      email,
      phone,
    };
  }

  async function loadClients() {
    const response = await api.get('client');

    setClient(
      response.data.map(clients =>
        createData(
          clients._id,
          clients.name,
          clients.cpf,
          clients.address,
          clients.number,
          clients.neighborhood,
          clients.city,
          clients.state,
          clients.email,
          clients.phone
        )
      )
    );
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Layout title="Clientes" history={history}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('cadastrar')}
      >
        Adicionar Cliente
      </Button>
      <Table rows={client} loadClients={loadClients} history={history} />
    </Layout>
  );
}

Client.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
