// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 用户编辑基础信息 POST /api/user/update/basic */
export async function UserControllerUpdateBasic(
  body: API.UpdateUserBasicDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/update/basic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看用户详情 POST /api/user/detail */
export async function UserControllerDetail(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.QueryUserDetailOutDto>('/api/user/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 POST /api/user/updatePassword */
export async function UserControllerRemove(
  body: API.UpdateUserPasswordDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/updatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置邮箱 POST /api/user/setEmail */
export async function UserControllerSetEmail(
  body: API.SetEmailDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/setEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证邮箱 POST /api/user/verifyEmail */
export async function UserControllerVerifyEmail(
  body: API.VerifyEmailDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/verifyEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
