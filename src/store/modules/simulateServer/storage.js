import types from '../../types'

const fakeServerData = {
  users: [
    {
      email: '1@1.1',
      password: '111111',
      id: '1@1.1',
      authorization: [types.auth.CONSUMER],
      profile: {},
      orders: []
    },
    {
      email: '2@2.2',
      password: '222222',
      id: '2@2.2',
      authorization: [types.auth.CONSUMER, types.auth.PRODUCER],
      profile: {},
      orders: [],
      deliverablesShops: ['budz-01'],
      products: []
    },
    {
      email: '3@3.3',
      password: '333333',
      id: '3@3.3',
      authorization: [types.auth.CONSUMER, types.auth.PRODUCER, types.auth.SHOP_MANAGER],
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
      id: '4@4.4',
      authorization: types.auth.TOP_MANAGER,
      profile: {},
      orders: [],
      products: []
    },
    {
      email: '5@5.5',
      password: '555555',
      id: '5@5.5',
      authorization: types.auth.SOFTOZOR
    }
  ]
}

export const initFakeServer = () => {
  localStorage.setItem('fake_server', JSON.stringify(fakeServerData))
}

export const read = () => JSON.parse(localStorage.getItem('fake_server'))

export const write = newServerData => {
  localStorage.setItem('fake_server', JSON.stringify(newServerData))
}
