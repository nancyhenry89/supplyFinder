function getVisitorIP() {
  var ret_ip;
  $.ajaxSetup({ async: false });
  $.get('https://api.ipify.org?format=json', function (r) {
    ret_ip = r.ip;
  });
  return ret_ip;
}
function getCurrentDT() {
  return new Date();
}
function getSKU() {
  var skuArr = JSON.parse(localStorage.getItem("sku"));
  $('#t3results-table a').click(function () {
    var sku = $(this).text();
    if ($.inArray(sku, skuArr) == -1) {
      skuArr.push(sku);
    }
    localStorage.setItem("sku", JSON.stringify(skuArr));
    return sku;
  });
}

function getHistoricalData() {
  var hd = JSON.parse(localStorage.getItem("sku"));
  var titles = [];
  if (hd!=null) {
    for (var i = 0; i < hd.length; i++) {
      $.getJSON("https://t3.tgoservices.com/v1/1/items/" + hd[i], function (r) {
        titles.push(r.title);
        $('#hd').append("<div><a href='#' id=" + r.sku + ">" + r.title + "</a> <a class='removeH'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>");
        sku = $(this).attr("id")

      });
    }
  }

  removeH();
  return titles;
}
function removeH() {
  var sku;
  $('.removeH').click(function () {
    debugger;
    sku = $(this).siblings('a').attr("id");
    $(this).parent('div').remove();
    var arr = JSON.parse(localStorage.getItem("sku"))

    var result = arr.filter(function (elem) {
      return elem != sku;
    });
    localStorage.setItem("sku", JSON.stringify(result));
  });


}