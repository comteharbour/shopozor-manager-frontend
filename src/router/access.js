import types from '../types'

const access = {
  notConnected: [
    types.links.LOGIN,
    types.links.SIGNUP,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP
  ],
  consumer: [
    types.links.PROFILE,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP,
    types.links.SEPARATOR,
    types.links.LOGOUT
  ],
  producer: [
    types.links.PROFILE,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP,
    types.links.PRODUCTS,
    types.links.SEPARATOR,
    types.links.LOGOUT
  ],
  shopManager: [
    types.links.PROFILE,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP,
    types.links.PRODUCTS,
    types.links.MY_SHOP,
    types.links.SEPARATOR,
    types.links.LOGOUT
  ],
  topManager: [
    types.links.PROFILE,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP,
    types.links.PRODUCTS,
    types.links.MY_SHOP,
    types.links.MANAGE_SHOPS,
    types.links.SEPARATOR,
    types.links.LOGOUT
  ],
  softozor: [
    types.links.PROFILE,
    types.links.SEPARATOR,
    types.links.HOME,
    types.links.MAP,
    types.links.PRODUCTS,
    types.links.MY_SHOP,
    types.links.MANAGE_SHOPS,
    types.links.MANAGE_SITE,
    types.links.SEPARATOR,
    types.links.LOGOUT
  ]
}

export default authorization => {
  switch (authorization) {
    case types.auth.NOT_CONNECTED:
      return access.notConnected
    case types.auth.CONSUMER:
      return access.consumer
    case types.auth.PRODUCER:
      return access.producer
    case types.auth.SHOP_MANAGER:
      return access.shopManager
    case types.auth.TOP_MANAGER:
      return access.topManager
    case types.auth.SOFTOZOR:
      return access.softozor
    default:
      return access.notConnected
  }
}
