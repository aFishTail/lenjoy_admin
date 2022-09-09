// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/file/upload/img/article */
export async function FileControllerCoverImport(options?: { [key: string]: any }) {
  return request<any>('/api/file/upload/img/article', {
    method: 'POST',
    ...(options || {}),
  });
}
