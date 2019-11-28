import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import {
  Movie,
  Restaurant,
  LocalHotel,
  Phone,
  // Schedule,
  School,
  Map,
  People,
  Done,
  MusicNote,
  Link,
  DoneAll,
  Notes,
  HowToVote,
} from '@material-ui/icons';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

import useStyles from './styles';

import Layout from '../../components/Layout';

function Dashboard(props) {
  const classes = useStyles();

  return (
    <Layout title="Bem-vindo ao Painel Administrativo" history={props.history}>
      <Grid container spacing={6} style={{ marginTop: 20 }}>
        {/* <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/programacao-geral')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Schedule className={classes.icon} />
              <Typography className={classes.title}>
                Programação Geral
              </Typography>
            </Grid>
          </Paper>
          </Grid> */}
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/telefones-uteis')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Phone className={classes.icon} />
              <Typography className={classes.title}>Telefones Úteis</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/noticias')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Notes className={classes.icon} />
              <Typography className={classes.title}>Notícias</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/hoteis-e-pousadas')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <LocalHotel className={classes.icon} />
              <Typography className={classes.title}>
                Hotéis e Pousadas
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/atividades-academicas')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <School className={classes.icon} />
              <Typography className={classes.title}>
                Atividades Acadêmicas
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/filmes')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Movie className={classes.icon} />
              <Typography className={classes.title}>Filmes</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/bares-e-restaurantes')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Restaurant className={classes.icon} />
              <Typography className={classes.title}>
                Bares e Restaurantes
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/roteiros')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Map className={classes.icon} />
              <Typography className={classes.title}>Roteiros</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/assessoria')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <People className={classes.icon} />
              <Typography className={classes.title}>Assessoria</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/comissao-julgadora')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <DoneAll className={classes.icon} />
              <Typography className={classes.title}>
                Comissão Julgadora
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/curadores')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Done className={classes.icon} />
              <Typography className={classes.title}>Curadores</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/programacao-musical')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <MusicNote className={classes.icon} />
              <Typography className={classes.title}>
                Programação Musical
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/clipping')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Link className={classes.icon} />
              <Typography className={classes.title}>Clipping</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/video')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <OndemandVideoIcon className={classes.icon} />
              <Typography className={classes.title}>Vídeo</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            onClick={() => props.history.push('/votacao')}
            style={{
              height: 230,
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <HowToVote className={classes.icon} />
              <Typography className={classes.title}>Votação</Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Dashboard;
