(function(){

  var _events = [];
  var _event = [];

  var EventStore = window.EventStore = $.extend({}, EventEmitter.prototype);

  var EVENT_CHANGE = "event_change";

  EventStore.addChangeListener = function(callback){
    this.on(EVENT_CHANGE, callback);
  };

  EventStore.removeChangeListener = function(callback){
    this.removeListener(EVENT_CHANGE, callback);
  };

  EventStore.changed = function(){
    this.emit(EVENT_CHANGE);
  };

  EventStore.dispatcherId = AppDispatcher.register(function(payload){
    switch (payload.actionType) {
      case EventConstants.EVENTS_RECEIVED:
        EventStore.storeAllGroupEvents(payload.events);
        break;
      case EventConstants.EVENT_RECEIVED:
        EventStore.storeEvent(payload.event);
        break;
    }
  });

  EventStore.storeAllGroupEvents = function(events){
    _events = events;
    this.changed();
  };

  EventStore.storeGroup = function(event){
    _event = [event];
    this.changed();
  };


  EventStore.allGroupEvents = function(){
    return _events.slice();
  };

  EventStore.event = function(){
    return _event.slice()[0];
  };

  EventStore.fetchAllGroupEvents = function(){
    ApiUtil.fetchAllGroupEvents();
  };

  EventStore.fetchEvent = function(id){
    ApiUtil.fetchEvent(id);
  };


})();
