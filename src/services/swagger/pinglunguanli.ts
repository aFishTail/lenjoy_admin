// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/comment/add/topic */
export async function CommentControllerAddTopic(
  body: API.CreateTopicCommentDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/comment/add/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/comment/del/topic */
export async function CommentControllerDelTopic(
  body: API.CreateTopicCommentDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/comment/del/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/comment/add/comment */
export async function CommentControllerAddComent(
  body: API.CreateCommentToCommentDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/comment/add/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/comment/del/comment */
export async function CommentControllerDelComent(
  body: API.DelCommentToCommentDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/comment/del/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/comment/list/topic */
export async function CommentControllerListTopic(
  body: API.QueryTopicCommentListDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/comment/list/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
