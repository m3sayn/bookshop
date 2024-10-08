export default {
    state: {
        items: []
    },
    getters: {
        cartProducts(state, getters, rootState){
            return state.items.map(cartItem =>{
              const product = rootState.products.items.find(product => product.id === cartItem.id)
              return {
                title: product.title,
                author: product.author,
                price: product.price,
                publishing_house: product.publishing_house,
                quantity: cartItem.quantity,
                image: product.image
              }
            })
        },
      
        cartTotal(state, getters){
            return getters.cartProducts.reduce((total, product) => total += product.price * product.quantity, 0)
        }
    },
    mutations: {
        pushProductToCart(state, productId){
            state.items.push({
              id: productId,
              quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem){
            cartItem.quantity++
        }
    },
    actions: {
        addProductToCart({state, getters, commit}, product){
            if(getters.productIsInStock(product)){
              const cartItem = state.items.find(item => item.id === product.id)
              if(!cartItem){
                commit('pushProductToCart', product.id)
              }
              else{
                commit('incrementItemQuantity', cartItem)
              }
              commit('decrementProductInventory', product)
            }
        }        
    }
}