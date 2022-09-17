// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传文章图片 POST /api/file/upload/img/article */
export async function FileControllerCoverImport(
  body: API.UploadArticleImageInputDto,
  options?: { [key: string]: any },
) {
  console.log('body:', body)
  return request<any>('/api/file/upload/img/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
