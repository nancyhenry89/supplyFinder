function getVisitorIP() {
 get_ip_callback();
}
        /* $.get("ajax.get-ip-address.php",function(data){ return data; }); */
    function get_ip_callback() {
        $.get("ajax.get-ip-address.php", function(data) {
            return data;
        });
    }
function getCurrentDT() {
  return new Date();
}
function saveHD(selectedItem, selectedItemId) {
  var flag = false;
  var skuArr = JSON.parse(localStorage.getItem("sku")) || [];
  // localStorage.setItem(selectedItemId, selectedItem);
  var sku = { selectedItem, selectedItemId };
  if (skuArr.length > 0) {
    for (var i = 0; i < skuArr.length; i++) {
      if (skuArr[i].selectedItemId == sku.selectedItemId) {
        flag = true;
      }
    }
    if (flag == false) {
      skuArr.push(sku);
    }
  } else {
    skuArr.push(sku);
  }
  localStorage.setItem("sku", JSON.stringify(skuArr));
  return sku;
}

function getHistoricalData() {
  /*for (var key in localStorage) {
    var newURL = window.location.href.replace('index', 't3results') + "?t3-printerId=" + parseInt(key, 10)

    $('#hd').append("<div><a href='" + newURL + "'id=" + key + ">" + localStorage.getItem(key) + "</a> <a class='removeH'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>");
  }*/

  var hd = JSON.parse(localStorage.getItem("sku")) || [];
  var titles = [];
  if (hd != null) {
    for (var i = 0; i < hd.length; i++) {
      var newURL = window.location.href.replace('index', 't3results') + "?t3-printerId=" + parseInt(hd[i].selectedItemId, 10)

      $('#hd').append("<div><a href='" + newURL + "'id=" + hd[i].selectedItemId + ">" + hd[i].selectedItem + "</a> <a class='removeH'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>");
      sku = $(this).attr("id")

    }
  }

  removeH();
}
function removeH() {
  var result=[];
  $('.removeH').click(function () {
    productId = $(this).siblings('a').attr("id");
    productText = $(this).siblings('a').text();
    //sku={"selectedItem":productId,"selectedItemId":productText}
    $(this).parent('div').remove();
    var arr = JSON.parse(localStorage.getItem("sku"))
    
    for (var i=0;i<arr.length;i++){
      if(productId!=arr[i].selectedItemId){
        var sku={"selectedItemId":arr[i].selectedItemId,"selectedItem":arr[i].selectedItem}
        result.push(sku)
      }
    }
    /*var result = arr.filter(function (elem) {
      return elem != sku;
    });*/
    localStorage.setItem("sku", JSON.stringify(result));
    result=[];

  });


}
