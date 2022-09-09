// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 收藏/取消收藏帖子 POST /api/userFavorite/topic */
export async function UserFavoriteControllerOperateTopic(
  body: API.UserFavoriteOperateDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/userFavorite/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
