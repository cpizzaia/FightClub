(function(){

  var _comments = [];

  var CommentStore = window.CommentStore = $.extend({}, EventEmitter.prototype);

  var COMMENT_CHANGE = "comment_change";

  CommentStore.addChangeListener = function(callback){
    this.on(COMMENT_CHANGE, callback);
  };

  CommentStore.removeChangeListener = function(callback){
    this.removeListener(COMMENT_CHANGE, callback);
  };

  CommentStore.changed = function(){
    this.emit(COMMENT_CHANGE);
  };

  CommentStore.dispatcherId = AppDispatcher.register(function(payload){
    switch (payload.actionType) {
      case CommentConstants.COMMENTS_RECEIVED:
        CommentStore.storeComments(payload.comments);
        break;
      case CommentConstants.COMMENT_RECEIVED:
        CommentStore.storeComment(payload.comment);
        break;
    }
  });

  CommentStore.storeComment = function(comment){
    _comments.unshift(comment);
    this.changed();
  };

  CommentStore.storeComments = function(comments){
    _comments = comments;
    this.changed();
  };

  CommentStore.clearComments = function(){
    _comments = [];
    this.changed();
  };

  CommentStore.fetchComments = function(eventId){
    CommentApiUtil.fetchComments(eventId);
  };

  CommentStore.all = function(){
    return _comments.slice();
  };

})();
