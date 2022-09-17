import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { TableDropdown } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Spin } from 'antd';
import {  useRef, useState } from 'react';
import type { RecordKey } from '@ant-design/pro-utils/lib/useEditableArray';
import { TopicControllerFindAll } from '@/services/swagger/tieziguanli';
import { Link } from 'umi';
import {  AdminTopicControllerRemove, AdminTopicControllerUpdate } from '@/services/swagger/guanlipingtaitieziguanli';
export default function Resource() {
  const [loading, setLoading] = useState<boolean>(true);

  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.Topic>[] = [
    {
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
    },
    {
      title: '标题',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: false,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '摘要',
      dataIndex: 'summary',
      ellipsis: true,
      copyable: true,
      search: false,
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createAt',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="editable"
          onClick={async () => {
            await AdminTopicControllerRemove({id: record.id})
            actionRef.current?.reload()
          }}
        >
          删除
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={(key) => console.log('select key:', key)}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];

  const handleSave = async (key: RecordKey, row: API.Topic) => {
    console.log('保存：', key, row);
    const { id, title, content } = row;
    const params = {
      id,
      title,
      content,
    };
    AdminTopicControllerUpdate(params);
  };
  return (
    <PageContainer content="帖子管理">
      {/* <FormRegister /> */}
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
        <ProTable<API.Topic, API.PageParams>
          request={async (params = {}) => {
            console.log('params', params);
            setLoading(true);
            const { data } = await TopicControllerFindAll({ ...params, pageNum: params.current });
            setLoading(false);
            return {
              data: data.records,
              total: data.total,
            };
          }}
          columns={columns}
          actionRef={actionRef}
          editable={{
            type: 'multiple',
            onSave: handleSave,
          }}
          rowKey="id"
          toolBarRender={() => [
            <Link to='/topic/create' key='create'>
              <Button key="add" type="primary">
                创建文章
              </Button>
            </Link>,
          ]}
        />
        ;
      </div>
    </PageContainer>
  );
}
