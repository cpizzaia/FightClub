(function(){

  var _groups = [];
  var _group = [];

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
        GroupStore.storeAllGroups(payload.groups);
        break;
      case GroupConstants.GROUP_RECEIVED:
        GroupStore.storeGroup(payload.group);
        break;
    }
  });

  GroupStore.storeAllGroups = function(groups){
    _groups = groups;
    this.changed();
  };

  GroupStore.storeGroup = function(group){
    _group = [group];
    this.changed();
  };


  GroupStore.all = function(){
    return _groups.slice();
  };

  GroupStore.group = function(){
    return _group.slice()[0];
  };

  GroupStore.fetchAllGroups = function(){
    ApiUtil.fetchAllGroups();
  };

  GroupStore.fetchGroup = function(id){
    ApiUtil.fetchGroup(id);
  };


})();
