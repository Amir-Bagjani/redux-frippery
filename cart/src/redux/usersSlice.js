import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: `users`,
  initialState: {
    users: [],
    findUser: {},
    quantity: 0,
    totalHeal: 0
  },
  reducers: {
    setLocalstorage : (state, action) => {
        state.users = action.payload.users;
        state.findUser = action.payload.findUser;
        state.quantity = action.payload.quantity;
    },
    foundUser: (state, action) => {
        state.findUser = [...state.users.filter(u => u.id.toString() === action.payload.toString())][0]
    },
    addUser: (state, action) => {
      state.users = [
        ...state.users,
        { name: action.payload, id: Math.random(), heal: 1 },
      ];
      state.quantity = state.users.length;
      state.totalHeal += 1;
    },
    removeUser: (state, action) => {
      state.users = [...state.users.filter((u) => u.id !== action.payload)];
      state.quantity = state.users.length;
    //   state.totalHeal = state.users.reduce((acc,val) =>(acc += val.heal))
      state.totalHeal = state.users.reduce((acc,val) =>{
            acc += val.heal;
            return acc
        },0)
    },
    editUser: (state, action) => {
      const nameEdit = [...state.users].map((user) => {
        if (user.id.toString() === action.payload.id.toString()) {
          return action.payload;
        }
        return user;
      });
      state.users = nameEdit;
      state.findUser = {};
    },
    increaseHeal: (state, action) => {
      const healInc = [...state.users].map((user) => {
        if (user.id.toString() === action.payload.id.toString()) {
          return { ...user, heal: action.payload.heal + 1 };
        }
        return user;
      });
      state.users = healInc;
      state.totalHeal += 1;
    },
    decreaseHeal: (state, action) => {
      const healDec = [...state.users].map((user) => {
        if (user.id.toString() === action.payload.id.toString()) {
          return { ...user, heal: action.payload.heal - 1 };
        }
        return user;
      });
      state.users = [...healDec.filter((i) => i.heal !== 0)];
      state.quantity = state.users.length;
      state.totalHeal -= 1;
    },
  },
});


export const { addUser, removeUser, editUser, increaseHeal, decreaseHeal, foundUser, setLocalstorage } =
  usersSlice.actions;
export default usersSlice.reducer;


