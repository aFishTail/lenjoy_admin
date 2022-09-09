import type { FC } from 'react';
import { useLocation, useParams } from 'umi';

const TopicEdit: FC = (props) => {
  console.log('进入创建帖子', props)
  const {id} = useParams<{id: string}>()
  return <div>编辑帖子: {id}</div>;
};

export default TopicEdit;
