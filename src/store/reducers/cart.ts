import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
  favorite: Produto[]
}

const initialState: CartState = {
  itens: [],
  favorite: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('item already added !')
      } else {
        state.itens.push(produto)
      }
    },
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favorite.find((p) => p.id === produto.id)) {
        state.favorite = state.favorite.filter((p) => p.id !== produto.id)
      } else {
        state.favorite.push(produto)
      }
    }
  }
})

export const { add, toggleFavorite } = cartSlice.actions
export default cartSlice.reducer
