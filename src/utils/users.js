const users = []

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, userName, room }) => {
  // Clean the data
  userName = userName.trim()
  room = room.trim().toLowerCase()

  // Validate the data
  if(!userName || !room) {
    return {
      error: 'User Name and room are required!'
    }
  }

  // Check existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.userName === userName
  })

  // Validate user name
  if(existingUser) {
    return {
      error: 'User is in use! Please use another one.'
    }
  }

  // Store user
  const user = {id, userName, room}
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if(index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id
  })
}

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter((user) => {
    return user.room === room
  })
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}