// @ts-nocheck - отключаем проверку типов для этого файла
import { createSlice } from '@reduxjs/toolkit'

// Простое начальное состояние
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Проверяем, есть ли товар уже в корзине
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        // Если есть - увеличиваем количество
        existingItem.quantity += 1
      } else {
        // Если нет - добавляем новый
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1
        })
      }
      
      // Пересчитываем общее количество
      let totalQty = 0
      let totalSum = 0
      for (let i = 0; i < state.items.length; i++) {
        totalQty += state.items[i].quantity
        totalSum += state.items[i].price * state.items[i].quantity
      }
      state.totalQuantity = totalQty
      state.totalPrice = totalSum
    },
    
    removeFromCart: (state, action) => {
      // Оставляем только те товары, у которых id не равен удаляемому
      const newItems = []
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id !== action.payload) {
          newItems.push(state.items[i])
        }
      }
      state.items = newItems
      
      // Пересчитываем
      let totalQty = 0
      let totalSum = 0
      for (let i = 0; i < state.items.length; i++) {
        totalQty += state.items[i].quantity
        totalSum += state.items[i].price * state.items[i].quantity
      }
      state.totalQuantity = totalQty
      state.totalPrice = totalSum
    },
    
    updateQuantity: (state, action) => {
      // Ищем товар и меняем его количество
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity = action.payload.quantity
          break
        }
      }
      
      // Пересчитываем
      let totalQty = 0
      let totalSum = 0
      for (let i = 0; i < state.items.length; i++) {
        totalQty += state.items[i].quantity
        totalSum += state.items[i].price * state.items[i].quantity
      }
      state.totalQuantity = totalQty
      state.totalPrice = totalSum
    },
    
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer