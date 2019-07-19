import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//import '../Styles/Dhomepage.css';
//import SimpleTable from './NewTicketDataDump'
import Button from '@material-ui/core/Button';
// /import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin'
import {Switch,Route} from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";


import Test from './Test';
const images = [
  {
    url: './hello1.png',
    title: 'User Profile',
    width: '100%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Home',
    width: '100%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'DashBoard',
    width: '100%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Admin',
    width: '100%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'New Data',
    width: '100%',
  },
  {
    
    url: '/static/images/grid-list/camera.jpg',
    title: 'FAQ',
    width: '100%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    //minWidth: 300,
    //width: '50%',
    //flexGrow: 
    flexBasis: '10%',
  },

  root2:{
    display: 'flex',
    flexDirection: 'row',
    //alignContent: 'center',
  },
  content: {
    //flexGrow: 4,
    //padding: theme.spacing(3),
    flexBasis: '90%',
  },
  image: {
    position: 'relative',
    height: 110,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
    <div className={classes.root}>
      {images.map(image => (
        
        <ButtonBase
          focusRipple
          key={image.title}
          id="buttonbase"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <Link to ={`${image.title}`} >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `${image.url}`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              
              {image.title}
              
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </Link>
        </ButtonBase>
        
      ))}


    </div>
    <Switch>
    <Route path={`/Admin`} component={Test} className={classes.content}/>
    </Switch>
    </div>
    
    
  );
}
