import isEmpty from 'lodash/isEmpty';
import cookie from 'js-cookie';
import StorageService from '../framework/src/services/storageService';

import { DEFAULT_ADDRESS, DEFAULT_LOCATION, COOKIE_VARIABLES } from '../framework/src/constants/AppConst';

export function createInitialStore() {
  const isLoggedIn = !isEmpty(cookie.get(COOKIE_VARIABLES.token));
  const userData = StorageService.getUserData() || {};
  const userInfo = !isEmpty(userData) ? userData : {};
  return { isLoggedIn, userInfo };
}

export const actions = {};

const commonUserAction = (state, action) => {
  return { ...state, user: { ...state.user, ...action.payload } };
};

actions.login = commonUserAction;
