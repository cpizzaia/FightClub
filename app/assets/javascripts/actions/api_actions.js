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
    actionType: GroupConstants.GROUPS_RECEIVED,
    group:data
  });
};
