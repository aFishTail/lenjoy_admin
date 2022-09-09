// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分类列表 POST /api/category/list */
export async function CategoryControllerFindAll(
  body: API.QueryCategoryListInputDto,
  options?: { [key: string]: any },
) {
  return request<API.Category>('/api/category/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /api/category/create */
export async function CategoryControllerCreate(
  body: API.CreateCategoryDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
