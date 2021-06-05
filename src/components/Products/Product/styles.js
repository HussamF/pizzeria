import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: 345,
    maxWidth: '100%',
    boxShadow: '4px 4px #fdc500',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit: 'contain',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0  2rem 1rem',
  },
  addToCart: {
    color: 'white',
    background: 'red',
    padding: '.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
