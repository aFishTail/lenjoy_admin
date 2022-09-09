// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送邮箱验证邮件给用户 POST /api/email/sendVerifyEmail */
export async function EmialControllerSendVerifyEmail(options?: { [key: string]: any }) {
  return request<any>('/api/email/sendVerifyEmail', {
    method: 'POST',
    ...(options || {}),
  });
}
