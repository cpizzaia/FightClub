var ApiActions = window.ApiActions = function(){

};

ApiActions.receiveUser = function(data){
  AppDispatcher.dispatch({
    actionType: UserConstants.USER_RECEIVED,
    user: data
  });
};

ApiActions.receiveAllGroups = function(data){
  AppDispatcher.dispatch({
    actionType: GroupConstants.GROUPS_RECEIVED,
    groups: data
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

ApiActions.receiveEvent = function(data){
  AppDispatcher.dispatch({
    actionType: EventConstants.EVENT_RECEIVED,
    event: data
  });
};
