import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { Input } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { CaptchaControllerFindOne } from '@/services/swagger/yanzhengma';

interface CaptchaInputValue {
  captchaCode?: string;
  captchaId?: string;
}

interface CaptchaInputProps {
  value?: CaptchaInputValue;
  onChange?: (value: CaptchaInputValue) => void;
  refresh: () => void;
}

// const CaptchaInput: React.FC<CaptchaInputProps> = forwardRef(
const CaptchaInput = forwardRef(({ value = {}, onChange }, ref) => {
  const [captchaCode, setCaptchaCode] = useState<string>('');
  const [captchaId, setCaptchaId] = useState<string>('');
  const [captchaUrl, setCaptchaUrl] = useState<string>('');
  const getCaptcha = useCallback(async () => {
    const { data } = await CaptchaControllerFindOne();
    const { id, imgUrl } = data;
    setCaptchaId(id);
    setCaptchaUrl(imgUrl);
  }, []);

  useImperativeHandle(ref, () => ({
    refresh: getCaptcha,
  }));

  // 触发改变
  const triggerChange = (changedValue: { captchaCode?: string; captchaKey?: string }) => {
    if (onChange) {
      onChange({ captchaCode, captchaId, ...value, ...changedValue });
    }
  };

  useEffect(() => {
    getCaptcha();
  }, []);

  // 输入框变化
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value || '';
    setCaptchaCode(code);
    triggerChange({ captchaCode: code });
  };

  // 时间类型变化
  const onClickImage = () => {
    getCaptcha();
  };

  return (
    <span>
      <Input.Group compact>
        <Input
          prefix={<SafetyCertificateOutlined style={{ color: '#319cff' }} />}
          placeholder={'请输入验证码'}
          onChange={onChangeInput}
          //  style={{width: '100%', marginRight: 5, padding: '6.5px 11px 6.5px 11px', verticalAlign: 'middle'}}
          suffix={
            <img
              style={{
                width: '120px',
                height: '35px',
                verticalAlign: 'middle',
                padding: '0px 0px 0px 0px',
              }}
              src={captchaUrl}
              onClick={onClickImage}
            />
          }
        />
      </Input.Group>
    </span>
  );
});
export default CaptchaInput;
