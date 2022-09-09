// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发布帖子 POST /api/topic/create */
export async function TopicControllerCreate(
  body: API.CreateTopicDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/topic/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看帖子列表 POST /api/topic/list */
export async function TopicControllerFindAll(
  body: API.QueryTopicListInputDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/topic/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看帖子详情 POST /api/topic/detail */
export async function TopicControllerGetDetail(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/topic/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑帖子 POST /api/topic/update */
export async function TopicControllerUpdate(
  body: API.UpdateTopicDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/topic/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除帖子 POST /api/topic/delete */
export async function TopicControllerRemove(
  body: API.PrimaryKeyDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/topic/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
