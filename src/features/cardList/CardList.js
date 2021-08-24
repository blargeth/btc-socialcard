import React from 'react';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import { Card } from '../card/Card';
import {
  selectCard,
} from '../card/cardSlice';
import { AddNew } from '../AddNew';

export function CardList() {
  const cardList = useSelector(selectCard);
  // const dispatch = useDispatch();

  // const incrementValue = Number(incrementAmount) || 0;


  return (
    <div className="cardlist">
        {cardList.map((card, i) => {
          let {name, username, avatar, email, phone, website, address, company} = card;
          return (
            <Card
            key={i}
            index={i}
            name={name}
            username={username}
            avatar={avatar}
            email={email}
            phone={phone}
            website={website}
            address={address}
            company={company}
            />
          )
        })}
        <AddNew />
    </div>
  );
}
