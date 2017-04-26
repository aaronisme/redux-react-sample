// fetching user
{
  type: 'AUTH_USER',
  uid
}

{
  type: 'UNAUTH_USER'
}

{
  type:'START_FETCH_USER'
}

{
  type:'FETCH_USER_SUCCESS',
  user: {
    name,
    avator,
    uid
  }
}

{
  type:'FETCH_USER_FAILED',
  error: 'error'
}

{
  type: 'START_FETCH_DUCKS'
}

{
  type: 'FETCH_DUCKS_SUCCESS',
  ducks
}

{
  type: 'ADD_DUCK'
  duck
}

{
  type: ADD_MULTIPLE_DUCKS,
    ducks,
}


// feed

{
  type: 'SET_DUCK_LISTENER'
}

{
  type: 'SET_DUCK_LISTENER_FAILED'
  error
}

{
  type: 'SET_DUCK_LISTENER',
  ducks
}

{
  type: 'SET_NEW_DUCK_AVAILABLE'
}

{
  type: 'ADD_DUCK_INTO_FEED'
  duckId
}

{
  type: 'ADD_LISTENER'
  listenerId
}

{
  type: 'OPEN_MODEL'
  text
}

{
  type: 'CLOSE_MODEL'
}

{
  type: 'start_FETCH_REPLIES'
}

{
  type: 'FETCH_REPLIES_SUCCESS',
  replies
}

{
  type: 'FETCH_REPLIES_FAILED'
}

{
  type: 'START_FETCH_USER_DUCKES'
}

{
  type: 'FETCH_USER_DUCKES_FAILED',
  error
}

{
  type: 'FETCH_USER_LIKES_SUCCESS'
  ducks
}

{
  type: ADD_LIKE,
    duckId,
}

{
  type: REMOVE_LIKE,
    duckId,
}

{
  type:'USER_LIKES',
  uid
}
