import storageService from "./storage-service"

export async function getCartByUsername(username) {
  const carts = await storageService.getObject("carts") 
  console.log(carts);
  if (!carts) {
    await createCartByUsername(username)
    const newCarts = await storageService.getObject("carts")
    return newCarts.find(cart => cart.username === username && cart.isActive === true)
  } else {
    const cart = carts.find(cart => cart.username === username && cart.isActive === true)
    if (!cart) {
      await createCartByUsername(username)
      const newCarts = await storageService.getObject("carts")
      return newCarts.find(cart => cart.username === username && cart.isActive === true)
    }
  }
  return carts.find(cart => cart.username === username && cart.isActive === true)
}

export async function createCartByUsername(username) {
  const carts = await storageService.getObject("carts")
  if (!carts) {
    const newCarts = [{
      username,
      cart: [],
      id: Math.random().toString(36).substr(2, 9),
      isActive: true,
    }]
    try {
      await storageService.setObject("carts", newCarts)
      return true
    } catch (e) {
      return false
    }
  } else {
    const newCarts = [...carts, {
      username,
      cart: [],
      id: Math.random().toString(36).substr(2, 9),
      isActive: true,
    }];
    try {
      await storageService.setObject("carts", newCarts)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export async function addToCart(cartId, item) {
  const carts = await storageService.getObject("carts")
  const cartsClone = JSON.parse(JSON.stringify(carts));
  const cart = cartsClone?.find(cart => cart.id === cartId)
  const it = cart?.cart?.find(i => i.name === item.name)
  if (it) {
    it.quantity += 1
  } else {
    cart?.cart?.push(item)
  }
  try {
    await storageService.setObject("carts", cartsClone)
    return cart;
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function updateToCart(cartId, item) {
  const carts = await storageService.getObject("carts")
  const cartsClone = JSON.parse(JSON.stringify(carts));
  const cart = cartsClone?.find(cart => cart.id === cartId)
  const it = cart?.cart?.find(i => i.name == item.name)
  if (it) {
    it.quantity = item.quantity
  } else {
    cart.cart.push(item)
  }
  try {
    await storageService.setObject("carts", cartsClone)
    return cart;
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function removeFromCart(cartId, item) {
  const carts = await storageService.getObject("carts")
  const cartsClone = JSON.parse(JSON.stringify(carts));
  const cart = cartsClone?.find(cart => cart.id === cartId)
  const newCart = cart?.cart?.filter(i => i.name !== item.name)
  cart.cart = newCart
  try {
    await storageService.setObject("carts", cartsClone)
    return cart
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function purchase(cartId) {
  const carts = await storageService.getObject("carts")
  const cartsClone = JSON.parse(JSON.stringify(carts));
  const cart = cartsClone?.find(cart => cart.id === cartId)
  cart.isActive = false
  try {
    await storageService.setObject("carts", cartsClone)
    await createCartByUsername(cart.username)
    return await getCartByUsername(cart.username)
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function clearCart(cartId) {
  const carts = await storageService.getObject("carts")
  const cartsClone = JSON.parse(JSON.stringify(carts));
  const cart = cartsClone?.find(cart => cart.id === cartId)
  cart.cart = []
  try {
    await storageService.setObject("carts", cartsClone)
    return cart
  } catch (e) {
    console.error(e)
    return false
  }
}
