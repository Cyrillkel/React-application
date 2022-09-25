import { configureStore } from '@reduxjs/toolkit';  // создаем хранилище с помощью хука
import basketReducer from './reducers/basket'; // импортируем редьюсерс
import cardPageReducer from './reducers/cardPage';

export default configureStore({
    reducer: {
      basket: basketReducer,
      cardPage: cardPageReducer,
    }
  })