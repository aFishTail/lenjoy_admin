// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 标为已读 POST /api/message/markRead */
export async function MessageControllerMarkRead(options?: { [key: string]: any }) {
  return request<any>('/api/message/markRead', {
    method: 'POST',
    ...(options || {}),
  });
}
