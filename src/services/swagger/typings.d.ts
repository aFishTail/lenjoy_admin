declare namespace API {
  type CreateTopicDto = {
    /** 标题 */
    title: string;
    /** 内容 */
    content: string;
    /** 摘要 */
    summary: string;
    /** 帖子主题 */
    categoryId: string;
  };

  type ResponseDto = {
    data: Record<string, any>;
    message: string;
    /** 请求码 */
    code: number;
  };

  type QueryTopicListInputDto = {
    pageNum: number;
    pageSize: number;
    userId: string;
    categoryLabel: string;
    categoryId: string;
    title: string;
    startTime: string;
    endTime: string;
  };

  type Category = {
    id: string;
    /** 名称 */
    name: string;
    /** label值 */
    label: string;
    description: string;
    /** 图标 */
    logo: string;
    /** 排序 */
    sortNo: number;
    /** 状态 */
    status: number;
  };

  type VisitedUser = {
    id: string;
    username: string;
  };

  type UserVisitedTopicDto = {
    id: string;
    /** 标题 */
    title: string;
    /** 摘要 */
    summary: string;
    /** 内容 */
    content: string;
    /** 是否推荐 */
    recommand: number;
    /** 观看数量 */
    viewCount: number;
    /** 评论数量 */
    commentCount: number;
    /** 点赞数量 */
    likeCount: number;
    /** 收藏数量 */
    favoriteCount: number;
    /** 最后评论时间 */
    lastCommentTime: string;
    /** 最后评论人 */
    lastCommentUser: string;
    /** 用户代理 */
    userAgent: string;
    /** IP地址 */
    ip: string;
    category: Category[];
    userId: string;
    createAt: string;
    updateAt: string;
    user: VisitedUser;
  };

  type QueryTopicListOut = {
    records: UserVisitedTopicDto[];
    total: number;
  };

  type QueryTopicListOutDto = {
    data: QueryTopicListOut[];
    message: string;
    /** 请求码 */
    code: number;
  };

  type PrimaryKeyDto = {
    /** 主键id */
    id: string;
  };

  type Topic = {
    id: string;
    /** 标题 */
    title: string;
    /** 摘要 */
    summary: string;
    /** 内容 */
    content: string;
    /** 是否推荐 */
    recommand: number;
    /** 观看数量 */
    viewCount: number;
    /** 评论数量 */
    commentCount: number;
    /** 点赞数量 */
    likeCount: number;
    /** 收藏数量 */
    favoriteCount: number;
    /** 最后评论时间 */
    lastCommentTime: string;
    /** 最后评论人 */
    lastCommentUser: string;
    /** 用户代理 */
    userAgent: string;
    /** IP地址 */
    ip: string;
    category: Category[];
    userId: string;
    createAt: string;
    updateAt: string;
  };

  type QueryTopicDetailOutDto = {
    data: Topic;
    message: string;
    /** 请求码 */
    code: number;
  };

  type UpdateTopicDto = {
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 摘要 */
    summary?: string;
    /** 帖子主题 */
    categoryId?: string;
    id: string;
  };

  type QueryCategoryListInputDto = {
    /** 分类名称 */
    name: string;
    startTime: string;
    endTime: string;
  };

  type CreateCategoryDto = {
    /** 分类名称 */
    name: string;
    /** 分类标签 */
    label: string;
    /** 分类描述 */
    description: string;
    /** 图标 */
    logo: string;
  };

  type QueryCategoryListOutDto = {
    data: Category[];
    message: string;
    /** 请求码 */
    code: number;
  };

  type QueryCategoryDetailOutDto = {
    data: Category;
    message: string;
    /** 请求码 */
    code: number;
  };

  type UpdateCategoryDto = {};

  type LoginInputDto = {};

  type RegisterInputDto = {};

  type LoginWithGithubInputDto = {};

  type UpdateUserBasicDto = {
    /** 简介 */
    nickname: string;
    /** 简介 */
    description: string;
  };

  type User = {
    id: string;
    /** 用户名 */
    username: string;
    /** 用户昵称 */
    nickname: string;
    /** 头像 */
    avatar: string;
    /** 邮箱 */
    email: string;
    /** 邮箱 */
    emailVerified: boolean;
    /** 描述 */
    description: string;
    /** 积分 */
    score: number;
    /** 话题数量 */
    topicCount: number;
    /** 评论数量 */
    commentCount: number;
    /** 粉丝数量 */
    fansCount: number;
    /** 关注数量 */
    followCount: number;
    /** 角色 */
    role: string;
    /** 状态 */
    status: string;
    /** 禁言时间 */
    forbiddenEndTime: string;
    thirdAccount: string[];
  };

  type QueryUserDetailOutDto = {
    data: User;
    message: string;
    /** 请求码 */
    code: number;
  };

  type UpdateUserPasswordDto = {
    id: string;
    oldPassword: string;
    newPassword: string;
  };

  type SetEmailDto = {
    email: string;
  };

  type VerifyEmailDto = {
    /** 邮件验证码 */
    code: string;
  };

  type CreateUserDto = {
    username: string;
    password: string;
    email: string;
  };

  type QueryUserInputDto = {
    pageNum: number;
    pageSize: number;
    username: string;
    startTime: string;
    endTime: string;
  };

  type QueryCaptchaOutDto = {
    id: string;
    imgUrl: string;
  };

  type ScoreOperateDto = {
    /** 实体id */
    entityId: string;
    /** 实体类型 */
    entityType: string;
    /** 操作类型，0:减少， 1:增加 */
    type: number;
  };

  type CreateTopicCommentDto = {
    entityId: string;
    content: string;
  };

  type CreateCommentToCommentDto = {
    entityId: string;
    parentCommentId: string;
    content: string;
  };

  type DelCommentToCommentDto = {
    id: string;
  };

  type QueryTopicCommentListDto = {};

  type CreateFollowDto = {};

  type UpdateFollowDto = {};

  type UserLikeOperateDto = {
    /** 实体类型 */
    entityId: string;
    /** 操作类型，0:取消点赞， 1:点赞 */
    status: number;
  };

  type CreateUserSignDto = {};

  type UpdateUserSignDto = {};

  type UploadArticleImageInputDto = {
    file: Record<string, any>;
  };

  type UserFavoriteOperateDto = {
    /** 实体类型 */
    entityId: string;
    /** 操作类型，0:取消收藏， 1:收藏 */
    status: number;
  };

  type FollowControllerFindOneParams = {
    id: string;
  };

  type FollowControllerRemoveParams = {
    id: string;
  };

  type FollowControllerUpdateParams = {
    id: string;
  };

  type UserSignControllerFindOneParams = {
    id: string;
  };

  type UserSignControllerRemoveParams = {
    id: string;
  };

  type UserSignControllerUpdateParams = {
    id: string;
  };
}
