(function(){

  var _groups = [];

  var GroupStore = window.GroupStore = $.extend({}, EventEmitter.prototype);

  var GROUP_CHANGE = "group_change";

  GroupStore.addChangeListener = function(callback){
    this.on(GROUP_CHANGE, callback);
  };

  GroupStore.removeChangeListener = function(callback){
    this.removeListener(GROUP_CHANGE, callback);
  };

  GroupStore.changed = function(){
    this.emit(GROUP_CHANGE);
  };

  GroupStore.dispatcherId = AppDispatcher.register(function(payload){
    switch (payload.actionType) {
      case GroupConstants.GROUPS_RECEIVED:
        GroupStore.store(payload.groups);
        break;
    }
  });

  GroupStore.store = function(groups){
    _groups = groups;
    this.changed();
  };


  GroupStore.all = function(){
    return _groups.slice();
  };

  GroupStore.fetch = function(){
    ApiUtil.fetchGroups();
  };


})();
