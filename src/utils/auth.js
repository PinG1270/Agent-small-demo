/**
 *  Created by yanqi on 21/04/12.
 * npm i js-cookie --save-dev
 */
import Cookies from 'js-cookie'

const TokenKey = 'biyao_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
