import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount,fetchPerson } from './cardAPI';
import faker from 'faker';


let randomInfo = [];

// create initial fake data (with x people)
const createRandomInfo = ( number ) => {
  for (let i = 0; i < number; i++) {
    randomInfo.push(faker.helpers.contextualCard());
  }
}

createRandomInfo(6);

const initialState = {
  value: randomInfo,
  status: 'idle',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (!action) {
        let newCard = faker.helpers.contextualCard();
        let {name, username, avatar, email, phone, website, address, company} = newCard;
        let newObj = {name, username, avatar, email, phone, website, address, company}
        state.value.push(newObj);
      } else {
        let {
          name = 'test',
          email = 'test@test.com',
          phone = '1234567',
          website = 'mywebsite.com',
          address = {
            street: 'blah',
            suite: 'Suite 1',
            city: 'new york',
            zipcode: '11111',
            geo: {
              lat: '-27.5516',
              lng: '-111.5720'
            }
          },
          company = {
            name: 'Albert and Co',
            catchPhrase: 'Business-focused intangible flexibility',
            bs: 'reinvent best-of-breed web services'
          }
        } = action.payload;

        state.value.push({
          ...state.value[action.payload.index],
          name,
          email,
          phone,
          website,
          address,
          company
        })
      }
    },
    decrement: (state) => {
      state.value.pop();
    },
    modifyData: (state, action) => {
      let {
        name = state.value[action.payload.index].name,
        email = state.value[action.payload.index].email,
        phone = state.value[action.payload.index].phone,
        website = state.value[action.payload.index].website,
        address = state.value[action.payload.index].address,
        company = state.value[action.payload.index].company} = action.payload;

      state.value[action.payload.index] = {
        ...state.value[action.payload.index],
        name,
        email,
        phone,
        website,
        address,
        company
      };
    },
    //ADD ADDITIONAL REDUCERS HERE
  },
});

export const { increment, decrement, modifyData } = cardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCard = (state) => state.card.value;

export default cardSlice.reducer;
