var GroupApiUtil = window.GroupApiUtil = function(){

};

GroupApiUtil.fetchAllGroups = function(){
  $.ajax({
    url: "/api/groups",
    type: "GET",
    contentType: "application/json",
    success: function(data){
      ApiActions.receiveAllGroups(data);
    }
  });
};

GroupApiUtil.createGroup = function(formData, callback){
  $.ajax({
    url: "api/groups/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveGroup(data);
      callback(data.id);
    }
  });
};


GroupApiUtil.joinGroup = function(formData){
  $.ajax({
    url: "api/users_groups/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveGroup(data);
    }
  });
};

GroupApiUtil.leaveGroup = function(group_id){
  $.ajax({
    url: "api/users_groups/" + group_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroup(data);
    }
  });
};

GroupApiUtil.fetchGroup = function(id){
  $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveGroup(data);
      }
  });
};

GroupApiUtil.fetchAllGroupEvents = function(id){
  $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveAllGroupEvents(events);
      }
  });
};
