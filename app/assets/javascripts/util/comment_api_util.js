var CommentApiUtil = window.CommentApiUtil = function(){

};

CommentApiUtil.fetchComments = function(eventId){
  $.ajax({
      url: "api/comments/",
      type: "GET",
      contentType: "application.json",
      data: {event_id: eventId},
      success: function(data){
        ApiActions.receiveComments(data);
      }
  });
};
