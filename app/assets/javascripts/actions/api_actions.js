var ApiActions = window.ApiActions = function(){

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
