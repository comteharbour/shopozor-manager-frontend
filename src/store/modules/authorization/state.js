import types from '../../types'

export default {
  authorization: types.auth.PRODUCER,
  userId: 1,
  users: [
    {
      email: '0@0.0',
      password: '000000',
      authorization: types.auth.CONSUMER
    },
    {
      email: '1@1.1',
      password: '111111',
      authorization: types.auth.PRODUCER
    },
    {
      email: '2@2.2',
      password: '222222',
      authorization: types.auth.SHOP_MANAGER
    },
    {
      email: '3@3.3',
      password: '333333',
      authorization: types.auth.TOP_MANAGER
    },
    {
      email: '4@4.4',
      password: '444444',
      authorization: types.auth.SOFTOZOR
    }
  ]
}
