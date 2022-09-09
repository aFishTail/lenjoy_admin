// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 管理员创建帖子 POST /api/admin/topic/create */
export async function AdminTopicControllerCreate(
  body: API.CreateTopicDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/admin/topic/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询帖子列表 POST /api/admin/topic/list */
export async function AdminTopicControllerFindAll(
  body: API.QueryTopicListInputDto,
  options?: { [key: string]: any },
) {
  return request<API.QueryTopicListOutDto>('/api/admin/topic/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询帖子详情 POST /api/admin/topic/detail */
export async function AdminTopicControllerDetail(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.QueryTopicDetailOutDto>('/api/admin/topic/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改帖子 POST /api/admin/topic/update */
export async function AdminTopicControllerUpdate(
  body: API.UpdateTopicDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/admin/topic/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除帖子 POST /api/admin/topic/delete */
export async function AdminTopicControllerRemove(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/admin/topic/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
