import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { TableDropdown } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal, Spin, Table } from 'antd';
import { Key, useEffect, useRef, useState } from 'react';
import type { RecordKey } from '@ant-design/pro-utils/lib/useEditableArray';
import { TopicControllerFindAll, TopicControllerUpdate } from '@/services/swagger/tieziguanli';
import { UserControllerFindAll, } from '@/services/swagger/yonghuguanli';
import { Link } from 'umi';
import { AdminUserControllerCreate, AdminUserControllerList, AdminUserControllerUpdate } from '@/services/swagger/guanlipingtaiyonghuguanli';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
export default function Resource() {
  const [loading, setLoading] = useState<boolean>(true);
  const columns: ProColumns<API.User>[] = [
    {
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      render: (el, record) => (<Link to={`/user-management/detail/${record.id}`}>{record.username}</Link>)
    },
    {
      title: '用户昵称',
      dataIndex: 'nickname',
      ellipsis: true,
      search: false,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      ellipsis: true,
      search: false,
    },
    {
      title: '积分',
      dataIndex: 'score',
      ellipsis: true,
      search: false,
      valueType: 'digit'
    },
    {
      title: '话题数量',
      dataIndex: 'topicCount',
      ellipsis: true,
      search: false,
      valueType: 'digit'
    },
    {
      title: '评论数量',
      dataIndex: 'commentCount',
      ellipsis: true,
      search: false,
      valueType: 'digit'
    },
    {
      title: '粉丝数量',
      dataIndex: 'fansCount',
      ellipsis: true,
      search: false,
      valueType: 'digit'
    },
    {
      title: '关注数量',
      dataIndex: 'followCount',
      ellipsis: true,
      search: false,
      valueType: 'digit'
    },
    {
      title: '角色',
      dataIndex: 'role',
      ellipsis: true,
      search: false,
    },
    {
      title: '状态',
      dataIndex: 'status',
      ellipsis: true,
      search: false,
      valueEnum: {
        active: { text: '激活', status: 'Processing' },
        locked: { text: '锁定', status: 'Default' }
      },
    },
    {
      title: '禁言时间',
      dataIndex: 'forbiddenEndTime',
      ellipsis: true,
      search: false,
      valueType: 'dateTime',
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createAt',
      valueType: 'date',
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
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];
  const actionRef = useRef<ActionType>();
  const handleSave= async (key: RecordKey , row: API.User) => {
    console.log('保存：', key, row)
    const {id, ...rest} = row
    const params = {
      id,
      ...rest
    }
    AdminUserControllerUpdate(params)
  }
  return (
    <PageContainer content="用户管理">
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
            console.log('params', params)
            setLoading(true)
            const {data} = await AdminUserControllerList({...params, pageNum: params.current})
            setLoading(false)
            return {
              data: data.records,
              total: data.total
            }
          }}
          columns={columns}
          actionRef={actionRef}
          editable={{
            type: 'multiple',
            onSave: handleSave
          }}
          rowKey="id"
          toolBarRender={() => [
            <ModalForm<{
              name: string;
              description: string;
            }>
              key="addUserModal"
              title="新增用户"
              trigger={
                <Button type="primary">
                  <PlusOutlined />
                  新增用户
                </Button>
              }
              autoFocusFirstInput
              modalProps={{
                onCancel: () => console.log('run'),
              }}
              onFinish={async (values) => {
                console.log(values.name);
                await AdminUserControllerCreate(values)
                message.success('创建成功')
                actionRef.current?.reload()
                return true;
              }}
            >
              <ProFormText name="username" label="用户名" />
              <ProFormText.Password name="password" label="密码（默认123456）" initialValue={'123456'}/>
              <ProFormText name="email" label="邮箱" initialValue="分类描述" />
            </ModalForm>
          ]}
        />
        ;
      </div>
    </PageContainer>
  );
}
