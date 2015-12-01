(function(){

  var _comments = [];

  var CommentStore = window.CommentStore = $.extend({}, EventEmitter.prototype);

  var COMMENT_CHANGE = "comment_change";

  CommentStore.addChangeListener = function(callback){
    this.on(COMMENT_CHANGE, callback);
  };

  CommentStore.removeChangeListener = function(callback){
    this.removeListener(EVENT_CHANGE, callback);
  };

  CommentStore.changed = function(){
    this.emit(EVENT_CHANGE);
  };

  CommentStore.dispatcherId = AppDispatcher.register(function(payload){
    switch (payload.actionType) {
      case CommentConstants.COMMENTS_RECEIVED:
        CommentStore.storeComments(payload.comments);
        break;
    }
  });

  CommentStore.storeComments = function(event){
    _comments = comments;
    this.changed();
  };

  CommentStore.all = function(){
    return _comments.slice();
  };

})();
