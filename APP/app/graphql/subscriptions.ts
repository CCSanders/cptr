/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship {
    onCreateFollowRelationship {
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
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship {
    onDeleteFollowRelationship {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreatePostReport = /* GraphQL */ `
  subscription OnCreatePostReport {
    onCreatePostReport {
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
export const onUpdatePostReport = /* GraphQL */ `
  subscription OnUpdatePostReport {
    onUpdatePostReport {
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
export const onDeletePostReport = /* GraphQL */ `
  subscription OnDeletePostReport {
    onDeletePostReport {
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
export const onCreatePostLikes = /* GraphQL */ `
  subscription OnCreatePostLikes {
    onCreatePostLikes {
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
export const onUpdatePostLikes = /* GraphQL */ `
  subscription OnUpdatePostLikes {
    onUpdatePostLikes {
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
export const onDeletePostLikes = /* GraphQL */ `
  subscription OnDeletePostLikes {
    onDeletePostLikes {
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
