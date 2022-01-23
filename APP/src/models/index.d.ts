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

export enum ConnectionType {
  FOLLOWING = "FOLLOWING",
  FOLLOWERS = "FOLLOWERS"
}

export enum ConnectionAction {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW"
}

export enum LikeAction {
  LIKE = "LIKE",
  UNLIKE = "UNLIKE"
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

export declare class User {
  readonly id: string;
  readonly handle: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt: string;
  readonly bio?: string;
  readonly avatar?: string;
  readonly posts?: Post[];
  readonly following?: User[];
  readonly followers?: User[];
  readonly blockList?: User[];
  readonly accessType: AccessType | keyof typeof AccessType;
  readonly followRequests?: User[];
  readonly notifications?: Notification[];
  constructor(init: ModelInit<User>);
}

export declare class Post {
  readonly id: string;
  readonly uri: string;
  readonly creator: User;
  readonly createdAt: string;
  readonly caption?: string;
  readonly comments?: Comment[];
  readonly likedBy?: User[];
  constructor(init: ModelInit<Post>);
}

export declare class Comment {
  readonly id: string;
  readonly body: string;
  readonly creator: User;
  readonly createdAt: string;
  readonly parent: Post;
  constructor(init: ModelInit<Comment>);
}

export declare class Notification {
  readonly id: string;
  readonly targetUser: User;
  readonly sourceUser: User;
  readonly createdAt: string;
  readonly type: NotificationType | keyof typeof NotificationType;
  readonly resource: string;
  constructor(init: ModelInit<Notification>);
}

export declare class PostReport {
  readonly id: string;
  readonly post: Post;
  readonly createdAt: string;
  readonly reason: ReportReason | keyof typeof ReportReason;
  readonly customReason?: string;
  constructor(init: ModelInit<PostReport>);
}



