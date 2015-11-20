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

ApiUtil.updateUser = function(id, formData){
  $.ajax({
    url: "api/users/" + id,
    type: "PATCH",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveUser(data);
    }
  });
};

ApiUtil.signUserOut = function(callback){
  $.ajax({
    url: "api/session/",
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveUser(data);
      callback();
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

ApiUtil.fetchGroup = function(id){
  $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveGroup(data);
      }
  });
};

ApiUtil.fetchAllGroupEvents = function(id){
  $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveAllGroupEvents(data.events);
      }
  });
};

ApiUtil.fetchEvent = function(id){
  $.ajax({
      url: "api/events/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveEvent(data);
      }
  });
};
