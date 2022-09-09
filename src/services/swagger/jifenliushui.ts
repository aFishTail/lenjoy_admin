// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/score/operate */
export async function ScoreControllerCreate(
  body: API.ScoreOperateDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/score/operate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/score/list */
export async function ScoreControllerList(options?: { [key: string]: any }) {
  return request<any>('/api/score/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/score/rank */
export async function ScoreControllerRank(options?: { [key: string]: any }) {
  return request<any>('/api/score/rank', {
    method: 'POST',
    ...(options || {}),
  });
}
