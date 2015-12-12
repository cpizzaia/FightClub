var GroupApiUtil = window.GroupApiUtil = function(){

};

GroupApiUtil.fetchGroupsByPage = function(page){
  return $.ajax({
    url: "/api/groups",
    type: "GET",
    contentType: "application/json",
    data: {page: page},
    success: function(data){
      ApiActions.receiveGroups(data);
    }
  });
};

GroupApiUtil.createGroup = function(formData){
  return $.ajax({
    url: "api/groups/",
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


GroupApiUtil.joinGroup = function(formData){
  return $.ajax({
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
  return $.ajax({
    url: "api/users_groups/" + group_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroup(data);
    }
  });
};

GroupApiUtil.fetchGroup = function(id){
  return $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveGroup(data);
      }
  });
};

GroupApiUtil.fetchAllGroupEvents = function(id){
  return $.ajax({
      url: "api/groups/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveAllGroupEvents(events);
      }
  });
};
