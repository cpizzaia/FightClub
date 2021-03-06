var CommentApiUtil = window.CommentApiUtil = function(){

};

CommentApiUtil.fetchComments = function(eventId){
  return $.ajax({
      url: "api/comments/",
      type: "GET",
      contentType: "application.json",
      data: {event_id: eventId},
      success: function(data){
        ApiActions.receiveComments(data);
      }
  });
};

CommentApiUtil.createComment = function(formData){
  return $.ajax({
      url: "api/comments/",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(data){
        ApiActions.receiveComment(data);
      }
  });
};

CommentApiUtil.createReply = function(formData){
  return $.ajax({
      url: "api/comments/",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(data){
        ApiActions.receiveReply(data);
      }
  });
};
