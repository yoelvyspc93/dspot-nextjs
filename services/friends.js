const API_URL = process.env.API_URL

export {
  getFriendsAll,
  getFriendById
}

/**
 * Service to retrieve a list of friend objects
 */
async function getFriendsAll () {
  const res = await fetch(`${API_URL}/friends`, { cache: 'no-store' })
  const data = await res.json()
  return mapOnePhotoFriendsAll(data)
}

/**
 * Service to retrieve a friend object by its ID
 * @param { id: number } friend ID
 */
async function getFriendById ({ id }) {
  const res = await fetch(`${API_URL}/friends/id`, { cache: 'no-store' })
  const data = await res.json()
  return mapOnePhotoFriendById(data)
}

/* These 2 methods are temporary because it does not load the
photo from s3.amazonaws.com */

function mapOnePhotoFriendsAll (lists) {
  return lists.map(obj => {
    return {
      ...obj,
      img: '/asset/images/avatar.png'
    }
  })
}

function mapOnePhotoFriendById (data) {
  return {
    ...data,
    img: '/asset/images/avatar.png',
    photos: [
      '/asset/images/galery.png',
      '/asset/images/galery.png',
      '/asset/images/galery.png',
      '/asset/images/galery.png'
    ]
  }
}
