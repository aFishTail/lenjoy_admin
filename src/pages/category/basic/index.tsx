// import {UmiUIFlag} from 'umi'
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Spin } from 'antd';
import {  useEffect, useRef, useState } from 'react';
import type { RecordKey } from '@ant-design/pro-utils/lib/useEditableArray';
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Link } from 'umi';
import { AdminCategoryControllerCreate, AdminCategoryControllerFindAll, AdminCategoryControllerRemove, AdminCategoryControllerUpdate } from '@/services/swagger/guanlipingtaifenlei';
export default function Resource() {
  const [loading, setLoading] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const columns: ProColumns<API.Category>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '名称',
      dataIndex: 'name',
      // copyable: true,
      // ellipsis: true,
      // tip: '名称过长会自动收缩',
      render: (el, record) => (<Link to={`/category/detail/${record.id}`}>{el}</Link>),
      // formItemProps: {
      //   rules: [
      //     {
      //       required: false,
      //       message: '此项为必填项',
      //     },
      //   ],
      // },
    },
    {
      title: '描述',
      dataIndex: 'description',
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
          onClick={async() => {
            await AdminCategoryControllerRemove({id: record.id})
            actionRef.current?.reload()
          }}
        >
          删除
        </a>
      ],
    },
  ];
  const handleSave= async (key: RecordKey , row: API.Topic) => {
    console.log('保存：', key, row)
  AdminCategoryControllerUpdate({...row})
  }
  return (
    <PageContainer content="分类管理">
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
            // const { pageSize, current, title, startTime, endTime } = params;
            const {data} = await AdminCategoryControllerFindAll({...params})
            console.log('category data', data)
            // return {
            //   data: records,
            //   success: true,
            //   total
            // }
            // return {
            //   data: data.records,
            //   total: data.total
            // }
            return {data}
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
              key="addCategoryModal"
              title="新建分类"
              trigger={
                <Button type="primary">
                  <PlusOutlined />
                  新建分类
                </Button>
              }
              autoFocusFirstInput
              modalProps={{
                onCancel: () => console.log('run'),
              }}
              onFinish={async (values) => {
                console.log(values.name);
                await AdminCategoryControllerCreate(values)
                message.success('创建成功')
                actionRef.current?.reload()
                return true;
              }}
            >
              <ProFormText name="name" label="名称" />
              <ProFormText name="label" label="label" />
              <ProFormText name="description" label="描述" initialValue="分类描述" />
            </ModalForm>
          ]}
        />
        ;
      </div>
    </PageContainer>
  );
}
