// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 点赞/取消点赞帖子 POST /api/userLike/topic */
export async function UserLikeControllerOperateTopic(
  body: API.UserLikeOperateDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/userLike/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 点赞/取消点赞评论 POST /api/userLike/comment */
export async function UserLikeControllerOperateComment(
  body: API.UserLikeOperateDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDto>('/api/userLike/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
