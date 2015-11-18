var ApiUtil = window.ApiUtil = function(){

};

ApiUtil.fetchCurrentUser= function(){
  $.ajax({
    url: "/api/users/current_user",
    type: "GET",
    contentType: "application/json",
    success: function(data){
      ApiActions.receiveUser(data);
    }
  });
};

ApiUtil.fetchAllGroups = function(){
  $.ajax({
    url: "/api/groups",
    type: "GET",
    contentType: "application/json",
    success: function(data){
      ApiActions.receiveAllGroups(data);
    }
  });
};
