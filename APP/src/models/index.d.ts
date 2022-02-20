import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AccessType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}

export enum NotificationType {
  FOLLOW = "FOLLOW",
  LIKE = "LIKE",
  COMMENT = "COMMENT",
  RECOMMENDED_FOLLOW = "RECOMMENDED_FOLLOW",
  POST_TAG = "POST_TAG"
}

export enum ReportReason {
  SPAM = "SPAM",
  NUDITY_SEXUAL_ACTIVITY = "NUDITY_SEXUAL_ACTIVITY",
  HATE_SPEECH = "HATE_SPEECH",
  FALSE_INFORMATION = "FALSE_INFORMATION",
  BULLYING_OR_HARASSMENT = "BULLYING_OR_HARASSMENT",
  USER_IN_DANGER = "USER_IN_DANGER",
  ILLEGAL_OR_DANGEROUS_ACTIVITY = "ILLEGAL_OR_DANGEROUS_ACTIVITY",
  CUSTOM_REASON = "CUSTOM_REASON"
}

export enum LikeAction {
  LIKE = "LIKE",
  UNLIKE = "UNLIKE"
}

export enum ConnectionAction {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW"
}

export enum ConnectionType {
  FOLLOWING = "FOLLOWING",
  FOLLOWERS = "FOLLOWERS"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FollowRelationshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostReportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostLikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly handle: string;
  readonly name: string;
  readonly email: string;
  readonly bio?: string;
  readonly avatar?: string;
  readonly posts?: Post[];
  readonly accessType: AccessType | keyof typeof AccessType;
  readonly notifications?: Notification[];
  readonly likedPosts?: PostLikes[];
  readonly comments?: Comment[];
  readonly blockList?: User[];
  readonly followRequests?: User[];
  readonly followers?: FollowRelationship[];
  readonly following?: FollowRelationship[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userBlockListId?: string;
  readonly userFollowRequestsId?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly uri: string;
  readonly creator: User;
  readonly caption?: string;
  readonly comments?: Comment[];
  readonly likedBy?: PostLikes[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly body: string;
  readonly creator: User;
  readonly parent: Post;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Notification {
  readonly id: string;
  readonly targetUser: User;
  readonly type: NotificationType | keyof typeof NotificationType;
  readonly resource: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notification, NotificationMetaData>);
  static copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}

export declare class FollowRelationship {
  readonly id: string;
  readonly followerId: string;
  readonly followeeId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userFollowersId?: string;
  readonly userFollowingId?: string;
  constructor(init: ModelInit<FollowRelationship, FollowRelationshipMetaData>);
  static copyOf(source: FollowRelationship, mutator: (draft: MutableModel<FollowRelationship, FollowRelationshipMetaData>) => MutableModel<FollowRelationship, FollowRelationshipMetaData> | void): FollowRelationship;
}

export declare class PostReport {
  readonly id: string;
  readonly post: Post;
  readonly reason: ReportReason | keyof typeof ReportReason;
  readonly customReason?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly postReportPostId: string;
  constructor(init: ModelInit<PostReport, PostReportMetaData>);
  static copyOf(source: PostReport, mutator: (draft: MutableModel<PostReport, PostReportMetaData>) => MutableModel<PostReport, PostReportMetaData> | void): PostReport;
}

export declare class PostLikes {
  readonly id: string;
  readonly user: User;
  readonly post: Post;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostLikes, PostLikesMetaData>);
  static copyOf(source: PostLikes, mutator: (draft: MutableModel<PostLikes, PostLikesMetaData>) => MutableModel<PostLikes, PostLikesMetaData> | void): PostLikes;
}