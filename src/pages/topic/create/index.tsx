import Editor from '@/components/Editor';
import { AdminCategoryControllerFindAll } from '@/services/swagger/guanlipingtaifenlei';
import { AdminTopicControllerCreate } from '@/services/swagger/guanlipingtaitieziguanli';
import { trimText } from '@/utils/dom';
import { UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Form, message, Row } from 'antd';
import type { FC } from 'react';
import { useRequest } from 'umi';

const TopicEdit: FC = (props) => {
  console.log('进入创建帖子', props);
  const onSubmit= async (value: any) => {
    console.log('values', value)
    const summary = trimText(value.content)
    console.log('sub', summary)
    await AdminTopicControllerCreate({...value, summary})
    message.success('新增帖子成功')
  }

  const { data:categories, error, loading } = useRequest(() => {
    return AdminCategoryControllerFindAll();
  });
  const categoryList = categories?.map(e => ({
    label: e.name,
    value: e.id
  }))


  return (
    <PageContainer content="新增帖子">
      <ProForm onFinish={onSubmit}>
        <Row gutter={24}>
          <Col span={12}>
            <ProFormText
              label="帖子标题"
              name="title"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={'帖子标题'}
              rules={[
                {
                  required: true,
                  message: '请输入标题',
                },
              ]}
            />
          </Col>
          <Col span={6}>
            <ProFormSelect
              label="请选择分类"
              name="categoryId"
              rules={[{ required: true, message: '请选择分类' }]}
              options={categoryList}
              placeholder="请选择帖子分类"
            />
          </Col>
        </Row>
        <Form.Item name='content' rules={[{required: true, message: '请输入帖子内容'}]}>
        <Editor />
        </Form.Item>
      </ProForm>
    </PageContainer>
  );
};

export default TopicEdit;
