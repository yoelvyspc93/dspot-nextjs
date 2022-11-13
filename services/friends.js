import friend from 'constant/friend'
import friends from 'constant/frineds'

/* const API_URL = process.env.API_URL */

function getFriendsAll () {
  /* const res = await fetch(`${API_URL}/friends`, { cache: 'no-store' })
  return res.json() */
  return friends
}

function getFriendById ({ id }) {
  /* const res = await fetch(`${API_URL}/friends/${id}`)
  return res.json() */
  return friend
}

export {
  getFriendsAll,
  getFriendById
}
