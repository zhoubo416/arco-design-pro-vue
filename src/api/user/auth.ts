import { http, httpOne } from '@/utils';
import { hexEncode } from '@/utils/auth/hexEncode';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return http.request<boolean>({
    url: '/getSmsCode',
    method: 'post',
    params: { phone },
  });
}

// 获取验证码
export function getCodeImg() {
  return httpOne.request<Object>({
    url: '/captcha/captchaImage',
    method: 'get',
  });
}

/**
 * 登录
 * @param username - 用户名
 * @param password - 密码
 */
export function fetchLogin(username: string, password: string, uuid: string, publicKey: string) {
  return httpOne.request<ApiAuth.Token>({
    url: '/system/login',
    method: 'post',
    params: {
      username: publicKey ? hexEncode(username, publicKey) : username,
      password: publicKey ? hexEncode(password, publicKey) : password,
      uuid,
    },
  });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return httpOne.request<ApiAuth.UserInfo>({
    url: '/system/getInfo',
    method: 'get',
  });
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
  return http.request<ApiRoute.Route>({
    url: '/getUserRoutes',
    method: 'post',
    params: { userId },
  });
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return http.request<ApiAuth.Token>({
    url: '/updateToken',
    method: 'post',
    params: { refreshToken },
  });
}
