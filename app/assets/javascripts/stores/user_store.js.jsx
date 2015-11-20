(function(){

  var _user = {};

  var UserStore = window.UserStore = $.extend({}, EventEmitter.prototype);

  var USER_CHANGE = "user_change";

  UserStore.addChangeListener = function(callback){
    this.on(USER_CHANGE, callback);
  };

  UserStore.removeChangeListener = function(callback){
    this.removeListener(USER_CHANGE, callback);
  };

  UserStore.changed = function(){
    this.emit(USER_CHANGE);
  };

  UserStore.dispatcherId = AppDispatcher.register(function(payload){
    switch (payload.actionType) {
      case UserConstants.USER_RECEIVED:
        UserStore.store(payload.user);
        break;
      case UserConstants.SIGN_USER_OUT:
        UserStore.clearCurrentUser();
        break;
    }
  });

  UserStore.store = function(user){
    _user = user;
    this.changed();
  };

  UserStore.clearCurrentUser = function(){
    _user = {};
  };


  UserStore.currentUser = function(){
    return _user;
  };

  UserStore.fetchCurrentUser = function(){
    ApiUtil.fetchCurrentUser();
  };


})();
