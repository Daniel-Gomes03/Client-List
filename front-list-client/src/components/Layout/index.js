import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  CssBaseline,
  Container,
  Tooltip,
} from '@material-ui/core';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Header extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    user: {},
  };

  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.getItem('@cpc:user')) });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignOut = () => {
    localStorage.removeItem('@cpc:token');
    localStorage.removeItem('@cpc:user');

    this.props.history.push('/entrar');
  };

  render() {
    const {
      classes,
      // location: { pathname },
      children,
      title,
    } = this.props;
    const { anchorEl, user } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Container maxWidth="lg">
              <Toolbar>
                <Grid
                  container
                  alignItems="center"
                  justify="space-between"
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                    noWrap
                  >
                    {title}
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Tooltip title="Home">
                      <Link
                        to="/"
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                        }}
                      >
                        <HomeIcon
                          className={classes.profileButton}
                          style={{
                            backgroundColor: 'transparent',
                            marginRight: 20,
                          }}
                        />
                      </Link>
                    </Tooltip>
                    <Avatar
                      style={{
                        backgroundColor: 'transparent',
                        marginRight: 10,
                      }}
                    >
                      <AccountCircle />
                    </Avatar>
                    <Typography
                      className={classes.username}
                      variant="h6"
                      color="inherit"
                      noWrap
                    >
                      {user.name}
                    </Typography>
                    <Tooltip title="Sair">
                      <IconButton
                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleSignOut}
                        style={{ marginLeft: 10 }}
                      >
                        <ExitToApp className={classes.profileButton} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>

          <main className={classes.content}>
            <div className={classes.toolbar} style={{ marginBottom: 50 }} />
            <Container maxWidth="lg">{children}</Container>
          </main>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles)
)(Header);
