// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取验证吗 POST /api/captcha/get */
export async function CaptchaControllerFindOne(options?: { [key: string]: any }) {
  return request<any>('/api/captcha/get', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 展示验证码 GET /api/captcha/show */
export async function CaptchaControllerShow(options?: { [key: string]: any }) {
  return request<any>('/api/captcha/show', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 验证验证码 POST /api/captcha/verify */
export async function CaptchaControllerVerify(options?: { [key: string]: any }) {
  return request<any>('/api/captcha/verify', {
    method: 'POST',
    ...(options || {}),
  });
}
