(function(){

  var _groups = [];
  var _group = {};

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
      case EventConstants.GROUP_EVENT_RECEIVED:
        GroupStore.addEvent(payload.event);
        break;
    }
  });

  GroupStore.addEvent = function(event){
    for (var i = 0; i < _group.upcoming_events.length; i++){
      if (_group.upcoming_events[i].id === event.id){
        _group.upcoming_events[i] = event;
        this.changed();
        return;
      }
    }
    _group.events.push(event);
    this.changed();
  };


  GroupStore.storeAllGroups = function(groups){
    _groups = groups;
    this.changed();
  };

  GroupStore.storeGroup = function(group){
    _group = group;
    this.changed();
  };

  GroupStore.clearGroup = function(group){
    _group = {};
  };


  GroupStore.all = function(){
    return _groups.slice();
  };

  GroupStore.group = function(){
    return _group;
  };

  GroupStore.fetchAllGroups = function(){
    ApiUtil.fetchAllGroups();
  };

  GroupStore.fetchGroup = function(id){
    ApiUtil.fetchGroup(id);
  };


})();
