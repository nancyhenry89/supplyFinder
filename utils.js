function getVisitorIP(){
  var ret_ip;
  $.ajaxSetup({async: false});
  $.get('https://jsonip.com/', function(r){ 
    ret_ip = r.ip; 
  });
  return ret_ip;
}


function getCurrentDT(){
 return new Date();
}
