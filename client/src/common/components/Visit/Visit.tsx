import React, { useState } from 'react'
import './visit.scss'
import 'flag-icon-css/css/flag-icon.min.css'
import { IconButton } from '@material-ui/core';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import moment from 'moment';
import { VisitorProfile } from '../VisitorProfile/VisitorProfile'
interface VisitProps {
  item: {
    url: String,
    method: String,
    responseTime: Number,
    day: String,
    month: String,
    year: Number,
    hour: Number,
    time: String,
    date: String,
    ip: String,
    countryCode: String,
    country: String,
    city: String,
    latitude: String,
    longitude: String,
    region: String,
    continent: String,
    language: String,
    browser: String,
    device: String,
    deviceVednor: String,
    deviceModel: String,
    os: String,
    osVersion: String,
    engine: String,
    createdAt: Date
  }
}
const item = {
  code: 'FI'
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

  function jsUcfirst(string: String) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function jsLwfirst(string: String) 
    {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

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
        <span className="visit__time">{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <div className="visit__details">
          <span title={
            `Country: ${item.country}
          Browser Language:  ${item.language}
          IP: ${item.ip}
          ` }
          className={`flag-icon flag-icon-${item.countryCode.toLowerCase()} mx-0.5`}></span>
          <img className="item__image" title={`${jsUcfirst(item.browser)}`} src={`https://img.icons8.com/fluency/48/000000/${jsLwfirst(item.browser) === 'edge' ? 'ms-edge' : jsLwfirst(item.browser)}.png`} />
          <img title={`Operating System: ${item.os}`} className="item__image" src={`https://img.icons8.com/color/48/000000/${jsLwfirst(item.os)}.png`} />
          <img title={` Device type: ${jsUcfirst(item.device)}
          Device brand: ${jsUcfirst(item.deviceVednor)}
          Device model: ${jsUcfirst(item.deviceModel)}
          `}
          src={`https://img.icons8.com/material-outlined/24/000000/${jsLwfirst(item.device) ===`desktop` ? `monitor`: jsLwfirst(item.browser)}.png`} className="item__image"/>
          <IconButton onClick={handleOpen} title='View Visitor Profile Details'>
            <PersonIcon style={{color : 'black'}} />
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
                action div
      </div>
    </div>
  );
}