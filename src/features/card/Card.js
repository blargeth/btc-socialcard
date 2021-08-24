import React from 'react';
import {
  // useSelector,
  useDispatch } from 'react-redux';
import {
  modifyData,
  // selectCard,
} from './cardSlice';

import './Card.module.css';
import {
  ADDRESS,
  COMPANY,
  WEB,
  PHONE,
  EMAIL
} from '../../assets/assets'

export function Card({name, avatar, email, phone, website, address, company, index}) {
  // const cards = useSelector(selectCard);
  const dispatch = useDispatch();


  const handleEditData = (e) => {
    dispatch(modifyData({
      index: index,
      name:"hello",
      email: "test@test.com",
      phone: "1234567"
      }))
  }

  return (
    <div className="card">
      <div className="iconbackground">
        <div className= "image">
        <img className="image" src={avatar} alt={name?.charAt(0)} />
        </div>
      </div>
      <div className="cardInfo">
        <div className="title" onClick={(e) => {handleEditData(e)}}>
          {name}
        </div>
        <div className="info">
          <span className="small-icon">{EMAIL}</span> {email}
        </div>
        <div className="info">
        <span className="small-icon">{ADDRESS}</span> {address?.street} {address?.suite} {address?.city} {address?.zipcode}
        </div>
        <div className="info">
        <span className="small-icon">{PHONE}</span> {phone}
        </div>
        <div className="info">
        <span className="small-icon">{WEB} </span>
          <div className="website">{website}
          </div>
        </div>
        <div className="companyInfo">
          <div className="logo">{COMPANY}</div>
          <div>
            <div className="company"> {company?.name}</div>
            <div className="catchphrase"> {company?.catchPhrase}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
