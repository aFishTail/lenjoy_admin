// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /api/admin/category/create */
export async function AdminCategoryControllerCreate(
  body: API.CreateCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/admin/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询列表 POST /api/admin/category/list */
export async function AdminCategoryControllerFindAll(
  body?: API.QueryCategoryListInputDto,
  options?: { [key: string]: any },
) {
  return request<API.QueryCategoryListOutDto>('/api/admin/category/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询详情 POST /api/admin/category/detail */
export async function AdminCategoryControllerFindOne(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.QueryCategoryDetailOutDto>('/api/admin/category/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑 POST /api/admin/category/update */
export async function AdminCategoryControllerUpdate(
  body: API.UpdateCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/admin/category/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /api/admin/category/delete */
export async function AdminCategoryControllerRemove(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/admin/category/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
