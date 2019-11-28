const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#2196f3',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    color: '#fff',
  },
  username: {
    fontSize: 18,
    color: '#fff',
  },
  profileButton: {
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#fff',
    width: drawerWidth,
  },
});

export default styles;
