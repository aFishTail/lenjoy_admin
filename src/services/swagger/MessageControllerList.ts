// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询未读消息列表 POST /api/message/list */
export async function MessageControllerList(options?: { [key: string]: any }) {
  return request<any>('/api/message/list', {
    method: 'POST',
    ...(options || {}),
  });
}
