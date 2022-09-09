// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/admin/user/create */
export async function AdminUserControllerCreate(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/admin/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/admin/user/list */
export async function AdminUserControllerList(
  body: API.QueryUserInputDto,
  options?: { [key: string]: any },
) {
  return request<API.User>('/api/admin/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/admin/user/update */
export async function AdminUserControllerUpdate(body: API.User, options?: { [key: string]: any }) {
  return request<any>('/api/admin/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看用户详情 POST /api/admin/user/detail */
export async function AdminUserControllerDetail(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.User>('/api/admin/user/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
