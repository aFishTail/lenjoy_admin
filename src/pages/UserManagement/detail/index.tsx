import { AdminTopicControllerFindAll } from "@/services/swagger/guanlipingtaitieziguanli";
import { AdminUserControllerDetail } from "@/services/swagger/guanlipingtaiyonghuguanli";
import { PageContainer } from "@ant-design/pro-layout";
import type { ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { Card, Descriptions } from "antd";
import type { FC } from "react";
import { useRequest, useParams } from "umi";
import styles from './style.less';

const UserDetail: FC = () => {
  const {id} = useParams<{id: string}>()
  const {data, loading} = useRequest(() => {
    return AdminUserControllerDetail({id})
  })

  const {data: articleRes}  = useRequest(() => {
    return AdminTopicControllerFindAll({userId: id, pageNum:1, pageSize: 10})
  })
  const articleData = articleRes?.records
  const articleColumns: ProColumns<API.Category>[] = [
    {
      title: '帖子标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '浏览量',
      dataIndex: 'viewCount',
      key: 'viewCount'
    },
    {
      title: '点赞数量',
      dataIndex: 'likeCount',
      key: 'likeCount'
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      valueType:'dateTime'
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      key: 'updateAt',
      valueType:'dateTime'
    },
  ]

  return (
    <PageContainer>
      <Card bordered={false} >
      <Descriptions title="分类" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="名称">{data?.username}</Descriptions.Item>
          <Descriptions.Item label="昵称">{data?.nickname}</Descriptions.Item>
          <Descriptions.Item label="邮箱">{data?.email}</Descriptions.Item>
          <Descriptions.Item label="积分">{data?.score}</Descriptions.Item>
          <Descriptions.Item label="话题数量">{data?.topicCount}</Descriptions.Item>
          <Descriptions.Item label="评论数量">{data?.commentCount}</Descriptions.Item>
          <Descriptions.Item label="粉丝数量">{data?.fansCount}</Descriptions.Item>
          <Descriptions.Item label="关注数量">{data?.followCount}</Descriptions.Item>
        </Descriptions>
      </Card>
      <div className={styles.title}>帖子列表</div>
        <ProTable
          style={{ marginBottom: 24 }}
          pagination={false}
          search={false}
          loading={loading}
          options={false}
          toolBarRender={false}
          dataSource={articleData}
          columns={articleColumns}
          rowKey="id"
        />
    </PageContainer>
  )
}

export default UserDetail
