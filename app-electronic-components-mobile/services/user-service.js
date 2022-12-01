import storageService from "./storage-service"

export async function login(user) {
  const users = await storageService.getObject("users")
  return users?.find(u => u.username === user.username && u.password === user.password) || null
}

export async function register(user) {
  const users = await storageService.getObject("users")
  if (!users) {
    try {
      await storageService.setObject("users", [user])
      return true
    } catch (e) {
      return false
    }
  } else {
    users.push(user)
    try {
      await storageService.setObject("users", users)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export async function checkUsernameExists(username) {
  const users = await storageService.getObject("users")
  return users?.some(user => user.username === username) ? true : false
}