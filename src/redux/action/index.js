// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}


export const loginUser = (name) => {
    return {
      type: 'LOGIN',
      payload: { name },
    };
  };

  
  export const logoutUser = () => {
    return {
      type: 'LOGOUT',
    };
  };


  export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });