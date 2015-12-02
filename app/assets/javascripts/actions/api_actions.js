var ApiActions = window.ApiActions = function(){

};

ApiActions.receiveCurrentUser = function(data){
  AppDispatcher.dispatch({
    actionType: UserConstants.CURRENT_USER_RECEIVED,
    user: data
  });
};

ApiActions.receiveUser = function(data){
  AppDispatcher.dispatch({
    actionType: UserConstants.USER_RECEIVED,
    user: data
  });
};

ApiActions.receiveGroups = function(data){
  AppDispatcher.dispatch({
    actionType: GroupConstants.GROUPS_RECEIVED,
    groups: data
  });
};

ApiActions.receiveSearchGroups = function(data){
  AppDispatcher.dispatch({
    actionType: GroupConstants.SEARCH_GROUPS_RECEIVED,
    groups: data.results
  });
};

ApiActions.receiveGroup = function(data){
  AppDispatcher.dispatch({
    actionType: GroupConstants.GROUP_RECEIVED,
    group: data
  });
};

ApiActions.receiveGroupEvents = function(data){
  AppDispatcher.dispatch({
    actionType: EventConstants.GROUP_EVENTS_RECEIVED,
    events: data
  });
};

ApiActions.receiveGroupEvent = function(data){
  AppDispatcher.dispatch({
    actionType: EventConstants.GROUP_EVENT_RECEIVED,
    event: data
  });
};

ApiActions.receiveEvent = function(data){
  AppDispatcher.dispatch({
    actionType: EventConstants.EVENT_RECEIVED,
    event: data
  });
};

ApiActions.receiveComments = function(data){
  AppDispatcher.dispatch({
    actionType: CommentConstants.COMMENTS_RECEIVED,
    comments: data
  });
};

ApiActions.receiveComment = function(data){
  AppDispatcher.dispatch({
    actionType: CommentConstants.COMMENT_RECEIVED,
    comment: data
  });
};

ApiActions.receiveReply = function(data){
  AppDispatcher.dispatch({
    actionType: CommentConstants.REPLY_RECEIVED,
    comment: data
  });
};
