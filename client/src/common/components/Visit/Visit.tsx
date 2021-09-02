import React, { useState } from 'react'
import './visit.scss'
import 'flag-icon-css/css/flag-icon.min.css'
import { IconButton } from '@material-ui/core';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import moment from 'moment'
import { VisitorProfile } from '../VisitorProfile/VisitorProfile'
interface VisitProps {
  item: {
    code: String
  }
}
const item = {
  code: 'fi'
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
    position:'absolute',
    top:'10%',
    left:'10%',
    overflow:'scroll',
    display:'block',
    width: '80%',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  
    },
  }),
);

const HoverableDiv = ({ handleMouseOver, handleMouseOut }: { handleMouseOver: any, handleMouseOut: any }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover Me
    </div>
  );
};

const HoverText = () => {
  return (
    <div>
      Hovering right meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
    </div>
  );
};
export const Visit: React.FC<VisitProps> = ({ item }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className={classes.paper}>
      <VisitorProfile item={item}/>
    </div>
  );
  return (
    <div className="visit__container">
      <div className='visit__user'>
        <span className="visit__time">{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
        <div className="visit__details">
          <span title='Country: Finland
          Browser Language:  language eng
          IP: 12.36.98.23
          Visitor ID: XV67YH
          ' className={`flag-icon flag-icon-${item.code} mx-0.5`}></span>
          <img title='Operating System: Windows 10' className="item__image" src="https://img.icons8.com/color/48/000000/windows-10.png" />
          <img title=' Device type: Desktop
          Device brand: Unknown
          Device model: Generic Desktop
          Resolution: 1280x1024
          ' src="https://img.icons8.com/material-outlined/24/000000/monitor.png" className="item__image"/>
          {/* <img src="https://img.icons8.com/color/48/000000/ubuntu--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/linux--v1.png" />
                <img src="https://img.icons8.com/color/40/000000/mac-logo.png" /> */}
          <IconButton onClick={handleOpen} title='View Visitor Profile Details'>
            <RecentActorsIcon />
          </IconButton>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <div className='visit__action'>

      </div>
    </div>
  );
}