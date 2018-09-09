import types from '../../types'

const fakeServerData = {
  users: [
    {
      email: '1@1.1',
      password: '111111',
      authorization: types.auth.CONSUMER,
      profile: {},
      orders: []
    },
    {
      email: '2@2.2',
      password: '222222',
      authorization: types.auth.PRODUCER,
      profile: {},
      orders: [],
      deliverablesShops: ['budz-01'],
      products: []
    },
    {
      email: '3@3.3',
      password: '333333',
      authorization: types.auth.SHOP_MANAGER,
      profile: {},
      orders: [],
      products: [],
      shop: {
        id: 'budz-01',
        producers: ['2@2.2', '3@3.3']
      }
    },
    {
      email: '4@4.4',
      password: '444444',
      authorization: types.auth.TOP_MANAGER,
      profile: {},
      orders: [],
      products: []
    },
    {
      email: '5@5.5',
      password: '555555',
      authorization: types.auth.SOFTOZOR
    }
  ]
}

export const initFakeServer = () => {
  localStorage.setItem('fake_server', JSON.stringify(fakeServerData))
}
