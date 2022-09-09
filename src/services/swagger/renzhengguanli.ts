// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/auth/login */
export async function AuthControllerLogin(
  body: API.LoginInputDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/userInfo */
export async function AuthControllerUserInfo(options?: { [key: string]: any }) {
  return request<any>('/api/auth/userInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/register */
export async function AuthControllerRegister(
  body: API.RegisterInputDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/loginWithGithub */
export async function AuthControllerLoginWithGithub(
  body: API.LoginWithGithubInputDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/loginWithGithub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
