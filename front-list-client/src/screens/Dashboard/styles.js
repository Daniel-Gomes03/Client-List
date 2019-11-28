import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: 65,
    height: 65,
    marginBottom: 20,
    color: '#bdbdbd',
  },
  title: {
    fontSize: 20,
    color: '#424242',
  },
}));

export default useStyles;
