import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../Footer/Footer';

export default makeStyles(() => ({
  root: {
    maxWidth: 345,
    maxWidth: '100%',
    // boxShadow: '5px 5px #322700',
    // boxShadow: '5px 5px #f3a735',
    boxShadow:
      '12px 12px 16px 0 rgba(0, 0, 0, 0.25) ,-8px -8px 12px 0 rgba(243, 119, 53, .2)',
    borderRadius: '10px',
    background: '#fff',
    // color: 'white',
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
    color: '#fff',
    background: '#fe2903',
    padding: '.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
