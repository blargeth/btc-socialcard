import React, {useState} from 'react';
import {
  useDispatch,
  // useSelector
}
  from 'react-redux';
import {
  increment,
  decrement,
  // selectCard
}
  from './card/cardSlice';

export function AddNew() {
  const dispatch = useDispatch();
  // const cards = useSelector(selectCard);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [newAddressSt, setNewAddressSt] = useState('');
  const [newAddressSuite, setNewAddressSuite] = useState('');
  const [newAddressCity, setNewAddressCity] = useState('');
  const [newAddressZip, setNewAddressZip] = useState('');
  const [newCompany, setNewCompany] = useState('');

  let newData = {
    // index: index,

      name: newName,
      email: newEmail,
      phone: newPhone,
      website: newWebsite,
      address: {street: newAddressSt, suite: newAddressSuite, city: newAddressCity, zipcode: newAddressZip},
      company: {name: newCompany, catchPhrase: 'no catchphrase'}
    }


  return (
    <div className="addNewInfo">
      <button onClick={() => {dispatch(increment(newData))}}> Add new person with information below</button>
      <button onClick={() => {dispatch(increment())}}> Add new random person</button>
      <button onClick={() => {dispatch(decrement())}}> Delete last person</button>
      <div className="newButtonInfo">
        <div> Name </div>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <div> Email </div>
        <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
        <div> Phone </div>
        <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
        <div> Website </div>
        <input type="text" value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)}/>
        <br/>
        <div> Address: </div>
        <div> Street </div>
        <input type="text" value={newAddressSt} onChange={(e) => setNewAddressSt(e.target.value)}/>
        <div> Suite </div>
        <input type="text" value={newAddressSuite} onChange={(e) => setNewAddressSuite(e.target.value)}/>
        <div> City </div>
        <input type="text" value={newAddressCity} onChange={(e) => setNewAddressCity(e.target.value)}/>
        <div> Zip </div>
        <input type="text" value={newAddressZip} onChange={(e) => setNewAddressZip(e.target.value)}/>
        <div> Company </div>
        <input type="text" value={newCompany} onChange={(e) => setNewCompany(e.target.value)}/>
      </div>
      <br/>
      <br/>
    </div>
  );
}
