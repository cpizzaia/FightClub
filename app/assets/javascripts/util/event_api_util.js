var EventApiUtil = window.GroupEventApiUtil = function(){

};

EventApiUtil.createEvent = function(formData, callback){
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


EventApiUtil.joinEvent = function(eventId){
  $.ajax({
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
  $.ajax({
    url: "api/users_events/" + event_id,
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveGroupEvent(data);
    }
  });
};

EventApiUtil.fetchEvent = function(id){
  $.ajax({
      url: "api/events/" + id,
      type: "GET",
      contentType: "application.json",
      success: function(data){
        ApiActions.receiveEvent(data);
      }
  });
};
