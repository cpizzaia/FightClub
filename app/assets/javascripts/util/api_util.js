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

ApiUtil.signUserIn = function(credentials, callback){
  $.ajax({
    url: "api/session/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: credentials,
    success: function(data){
      ApiActions.receiveUser(data);
      callback();
    }
  });
};

ApiUtil.signUserUp = function(credentials, callback){
  $.ajax({
    url: "api/users/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: credentials,
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

ApiUtil.createGroup = function(formData, callback){
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

ApiUtil.createEvent = function(formData, callback){
  $.ajax({
    url: "api/events/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveGroupEvent(data);
      callback();
    }
  });
};

ApiUtil.joinGroup = function(formData){
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

ApiUtil.joinEvent = function(eventId){
  $.ajax({
    url: "api/users_events/",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({event_id: eventId}),
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    }
  });
};

ApiUtil.leaveEvent = function(event_id){
  $.ajax({
    url: "api/users_events/" + event_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    }
  });
};


ApiUtil.leaveGroup = function(group_id){
  $.ajax({
    url: "api/users_groups/" + group_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroup(data);
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
        ApiActions.receiveAllGroupEvents(events);
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
