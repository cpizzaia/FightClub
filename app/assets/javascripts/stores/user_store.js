(function(){

  var _user = {};
  var _currentUser = {};

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
      case UserConstants.CURRENT_USER_RECEIVED:
        UserStore.storeCurrentUser(payload.user);
        break;
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

  UserStore.storeCurrentUser = function(user){
    _currentUser = user;
    this.changed();
  };

  UserStore.clearCurrentUser = function(){
    _currentUser = {};
  };

  UserStore.clearUser = function(){
    _user = {};
  };

  UserStore.currentUser = function(){
    return _currentUser;
  };

  UserStore.user = function(){
    return _user;
  };

  UserStore.fetchCurrentUser = function(){
    UserApiUtil.fetchCurrentUser();
  };

  UserStore.fetchUserById = function(id){
    UserApiUtil.fetchUserById(id);
  };


})();
