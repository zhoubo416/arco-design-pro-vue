import { storage } from '@/utils/storage/storage';
import { REFRESH_TOKEN_KEY, TOKEN_KEY, USER_INFO_KEY } from '@/enums/cacheEnum';

/** 设置token */
export function setToken(token: string) {
  storage.set(TOKEN_KEY, token);
}

/** 获取token */
export function getToken() {
  return storage.get<string>(TOKEN_KEY) || '';
}

/** 去除token */
export function removeToken() {
  storage.remove(TOKEN_KEY);
}

/** 获取refresh token */
export function getRefreshToken() {
  return storage.get<string>(REFRESH_TOKEN_KEY) || '';
}

/** 设置refresh token */
export function setRefreshToken(token: string) {
  storage.set(REFRESH_TOKEN_KEY, token);
}

/** 去除refresh token */
export function removeRefreshToken() {
  storage.remove(REFRESH_TOKEN_KEY);
}

/** 获取用户信息 */
export function getUserInfo() {
  const emptyInfo: Auth.UserInfo = {
    userId: '',
    userName: '',
    userRole: 'user',
  };
  const userInfo: Auth.UserInfo = storage.get<Auth.UserInfo>(USER_INFO_KEY) || emptyInfo;
  return userInfo;
}

/** 设置用户信息 */
export function setUserInfo(userInfo: Auth.UserInfo) {
  storage.set(USER_INFO_KEY, userInfo);
}

/** 去除用户信息 */
export function removeUserInfo() {
  storage.remove(USER_INFO_KEY);
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  removeToken();
  removeRefreshToken();
  removeUserInfo();
}
