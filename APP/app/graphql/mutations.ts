/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      handle
      name
      email
      bio
      avatar
      posts {
        items {
          uri
          caption
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userPostsId
        }
        nextToken
        startedAt
      }
      accessType
      notifications {
        items {
          type
          resource
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      likedPosts {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      blockList {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followRequests {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followers {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      following {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBlockListId
      userFollowRequestsId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      handle
      name
      email
      bio
      avatar
      posts {
        items {
          uri
          caption
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userPostsId
        }
        nextToken
        startedAt
      }
      accessType
      notifications {
        items {
          type
          resource
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      likedPosts {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      blockList {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followRequests {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followers {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      following {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBlockListId
      userFollowRequestsId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      handle
      name
      email
      bio
      avatar
      posts {
        items {
          uri
          caption
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userPostsId
        }
        nextToken
        startedAt
      }
      accessType
      notifications {
        items {
          type
          resource
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      likedPosts {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      blockList {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followRequests {
        items {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        nextToken
        startedAt
      }
      followers {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      following {
        items {
          followerId
          followeeId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFollowersId
          userFollowingId
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBlockListId
      userFollowRequestsId
    }
  }
`;
export const createFollowRelationship = /* GraphQL */ `
  mutation CreateFollowRelationship(
    $input: CreateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    createFollowRelationship(input: $input, condition: $condition) {
      followerId
      followeeId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFollowersId
      userFollowingId
    }
  }
`;
export const deleteFollowRelationship = /* GraphQL */ `
  mutation DeleteFollowRelationship(
    $input: DeleteFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    deleteFollowRelationship(input: $input, condition: $condition) {
      followerId
      followeeId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFollowersId
      userFollowingId
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      uri
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      caption
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      likedBy {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      uri
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      caption
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      likedBy {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      uri
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      caption
      comments {
        items {
          body
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userCommentsId
          postCommentsId
        }
        nextToken
        startedAt
      }
      likedBy {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      body
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      parent {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      body
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      parent {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      body
      creator {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      parent {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      targetUser {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      sourceId {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      type
      resource
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      targetUser {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      sourceId {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      type
      resource
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      targetUser {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      sourceId {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      type
      resource
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const createPostReport = /* GraphQL */ `
  mutation CreatePostReport(
    $input: CreatePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    createPostReport(input: $input, condition: $condition) {
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      reason
      customReason
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postReportPostId
    }
  }
`;
export const updatePostReport = /* GraphQL */ `
  mutation UpdatePostReport(
    $input: UpdatePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    updatePostReport(input: $input, condition: $condition) {
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      reason
      customReason
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postReportPostId
    }
  }
`;
export const deletePostReport = /* GraphQL */ `
  mutation DeletePostReport(
    $input: DeletePostReportInput!
    $condition: ModelPostReportConditionInput
  ) {
    deletePostReport(input: $input, condition: $condition) {
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      reason
      customReason
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postReportPostId
    }
  }
`;
export const createPostLikes = /* GraphQL */ `
  mutation CreatePostLikes(
    $input: CreatePostLikesInput!
    $condition: ModelPostLikesConditionInput
  ) {
    createPostLikes(input: $input, condition: $condition) {
      id
      userID
      postID
      user {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePostLikes = /* GraphQL */ `
  mutation UpdatePostLikes(
    $input: UpdatePostLikesInput!
    $condition: ModelPostLikesConditionInput
  ) {
    updatePostLikes(input: $input, condition: $condition) {
      id
      userID
      postID
      user {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePostLikes = /* GraphQL */ `
  mutation DeletePostLikes(
    $input: DeletePostLikesInput!
    $condition: ModelPostLikesConditionInput
  ) {
    deletePostLikes(input: $input, condition: $condition) {
      id
      userID
      postID
      user {
        handle
        name
        email
        bio
        avatar
        posts {
          nextToken
          startedAt
        }
        accessType
        notifications {
          nextToken
          startedAt
        }
        likedPosts {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        blockList {
          nextToken
          startedAt
        }
        followRequests {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBlockListId
        userFollowRequestsId
      }
      post {
        uri
        creator {
          handle
          name
          email
          bio
          avatar
          accessType
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userBlockListId
          userFollowRequestsId
        }
        caption
        comments {
          nextToken
          startedAt
        }
        likedBy {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userPostsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
