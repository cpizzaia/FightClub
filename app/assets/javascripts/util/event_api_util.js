var EventApiUtil = window.EventApiUtil = function(){

};

EventApiUtil.createEvent = function(formData){
  return $.ajax({
    url: "api/events/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    }
  });
};


EventApiUtil.joinEvent = function(eventId){
  return $.ajax({
    url: "api/users_events/",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({event_id: eventId}),
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    },
    error: function(data){
    }
  });
};

EventApiUtil.leaveEvent = function(event_id){
  return $.ajax({
    url: "api/users_events/" + event_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    }
  });
};

EventApiUtil.fetchEvent = function(id){
  return $.ajax({
      url: "api/events/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveEvent(data);
      }
  });
};
