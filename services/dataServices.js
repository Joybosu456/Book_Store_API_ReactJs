import axios from "axios"

const headerConfig = {
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
}

export const getBooks=(obj)=>{
    let response=axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",obj)
    return response
}
export const getCarts=()=>{
    let response=axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",headerConfig)
    return response
}
export const postCarts=(id)=>{
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,id,headerConfig)
    return response
}
export const putCarts=(id,obj)=>{
    let response=axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,obj,headerConfig)
    return response
}
export const wishList=(id,obj)=>{
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,obj,headerConfig)
    return response
}
export const editAddress=(obj)=>{
    console.log(obj)
    console.log(headerConfig)
    let response=axios.put("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user",obj,headerConfig)
    return response
}

export const addOrder=(obj)=>{
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,obj,headerConfig)
    return response
}

export const deleteBooks=(id)=>{
    console.log(headerConfig)
    let response=axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig)
    return response
}

export const getWishList=()=>{
    let response=axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`,headerConfig)
    return response
}
export const deleteWishList=(id)=>{
    console.log(headerConfig)
    let response=axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`,headerConfig)
    return response
}









