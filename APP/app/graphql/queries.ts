/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($id: ID!) {
    getFollowRelationship(id: $id) {
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
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncFollowRelationships = /* GraphQL */ `
  query SyncFollowRelationships(
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        body
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
        parent {
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
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        body
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
        parent {
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
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        targetUser {
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
        sourceId {
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
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        targetUser {
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
        sourceId {
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
  }
`;
export const getPostReport = /* GraphQL */ `
  query GetPostReport($id: ID!) {
    getPostReport(id: $id) {
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
export const listPostReports = /* GraphQL */ `
  query ListPostReports(
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        post {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPostReports = /* GraphQL */ `
  query SyncPostReports(
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        post {
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
      nextToken
      startedAt
    }
  }
`;
export const getPostLikes = /* GraphQL */ `
  query GetPostLikes($id: ID!) {
    getPostLikes(id: $id) {
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
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        user {
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
        post {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostLikes = /* GraphQL */ `
  query SyncPostLikes(
    $filter: ModelPostLikesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        postID
        user {
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
        post {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userByHandle = /* GraphQL */ `
  query UserByHandle(
    $handle: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByHandle(
      handle: $handle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const followRelationshipsByFollowerId = /* GraphQL */ `
  query FollowRelationshipsByFollowerId(
    $followerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followRelationshipsByFollowerId(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const followRelationshipsByFolloweeId = /* GraphQL */ `
  query FollowRelationshipsByFolloweeId(
    $followeeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followRelationshipsByFolloweeId(
      followeeId: $followeeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
