var UserApiUtil = window.UserApiUtil = function(){

};

UserApiUtil.fetchCurrentUser= function(){
  return $.ajax({
    url: "/api/users/current_user",
    type: "GET",
    contentType: "application/json",
    success: function(data){
      ApiActions.receiveCurrentUser(data);
    }
  });
};

UserApiUtil.fetchUserById= function(id){
 return $.ajax({
    url: "/api/users/" + id,
    type: "GET",
    contentType: "application/json",
    success: function(data){
      ApiActions.receiveUser(data);
    }
  });
};

UserApiUtil.updateUser = function(id, formData){
  return $.ajax({
    url: "api/users/" + id,
    type: "PATCH",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(data){
      ApiActions.receiveCurrentUser(data);
    }
  });
};

UserApiUtil.signUserOut = function(){
  return $.ajax({
    url: "api/session/",
    type: "DELETE",
    dataType: 'json',
    success: function(data){
      ApiActions.receiveCurrentUser(data);
    }
  });
};

UserApiUtil.signUserIn = function(credentials){
  return $.ajax({
    url: "api/session/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: credentials,
    success: function(data){
      ApiActions.receiveCurrentUser(data);
    }
  });
};

UserApiUtil.signUserUp = function(credentials){
  return $.ajax({
    url: "api/users/",
    type: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: credentials,
    success: function(data){
      ApiActions.receiveCurrentUser(data);
    }
  });
};
