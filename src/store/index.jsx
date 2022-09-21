import { configureStore } from "@reduxjs/toolkit";  // создаем хранилище с помощью хука
import basketReduser from './reducers/basket'; // импортируем редьюсерс

export default configureStore({
    reducer: {
      basket: basketReduser
    }
  })