// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccessType = {
  "PUBLIC": "PUBLIC",
  "PRIVATE": "PRIVATE"
};

const NotificationType = {
  "FOLLOW": "FOLLOW",
  "LIKE": "LIKE",
  "COMMENT": "COMMENT",
  "RECOMMENDED_FOLLOW": "RECOMMENDED_FOLLOW",
  "POST_TAG": "POST_TAG"
};

const ConnectionType = {
  "FOLLOWING": "FOLLOWING",
  "FOLLOWERS": "FOLLOWERS"
};

const ConnectionAction = {
  "FOLLOW": "FOLLOW",
  "UNFOLLOW": "UNFOLLOW"
};

const LikeAction = {
  "LIKE": "LIKE",
  "UNLIKE": "UNLIKE"
};

const ReportReason = {
  "SPAM": "SPAM",
  "NUDITY_SEXUAL_ACTIVITY": "NUDITY_SEXUAL_ACTIVITY",
  "HATE_SPEECH": "HATE_SPEECH",
  "FALSE_INFORMATION": "FALSE_INFORMATION",
  "BULLYING_OR_HARASSMENT": "BULLYING_OR_HARASSMENT",
  "USER_IN_DANGER": "USER_IN_DANGER",
  "ILLEGAL_OR_DANGEROUS_ACTIVITY": "ILLEGAL_OR_DANGEROUS_ACTIVITY",
  "CUSTOM_REASON": "CUSTOM_REASON"
};

const { User, Post, Comment, Notification, PostReport } = initSchema(schema);

export {
  AccessType,
  NotificationType,
  ConnectionType,
  ConnectionAction,
  LikeAction,
  ReportReason,
  User,
  Post,
  Comment,
  Notification,
  PostReport
};