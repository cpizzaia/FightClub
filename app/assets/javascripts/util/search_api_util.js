var SearchApiUtil = window.SearchApiUtil = function(){

};

SearchApiUtil.search = function(query){
  return $.ajax({
    url: "/api/search",
    type: "GET",
    contentType: "application/json",
    data: {query: query},
    success: function(data){
      ApiActions.receiveSearchGroups(data);
    }
  });
};
