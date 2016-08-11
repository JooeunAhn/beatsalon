function removeCookie(cookie_name, value){
  var pre_cookie = getCookie(cookie_name);
  pre_cookie = pre_cookie.split(",");
  delete pre_cookie[pre_cookie.indexOf(value)];
  var str = "";
  for (var i = 0; i<pre_cookie.length;i++){
    if (pre_cookie[i]){
        str += pre_cookie[i] + ',';
    }
  }
  if ("," == str[str.length-1]){

    str = str.slice(0,-1);
  }
  return str;
}


function setCookie(cookie_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var cookie_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = cookie_name + "=" + cookie_value;
}

function getCookie(cookie_name) {
  var i, x, y, z = document.cookie.split(";");
  for (i = 0; i < z.length; i++) {
      x = z[i].substr(0, z[i].indexOf("="));
      y = z[i].substr(z[i].indexOf("=") + 1);
      x = x.replace(/^s+|s+$/g, "");
      if (x == cookie_name) {
      return unescape(y);
    }
  }
}

function addCookie(url) {
  var maxitem =  4; // 최대 유지할 수 있는 url 개수
  prev_url = getCookie('play_list');
  if ((prev_url == '') || (prev_url == null)) {
    setCookie('play_list', url);
  }
  else {
    if (getCookie('play_list').split(',').length > maxitem + 1) {
      prev_url = prev_url.substring(prev_url.indexOf(',') + 1);
    }

    if (prev_url.match(url)) {
    console.log(url); // 이미 존재하는 경우 console에만 출력하고 실제 반영되지 않음
    var str=removeCookie("play_list", url);
    setCookie('play_list',str+','+url);
    }
    else {
      setCookie('play_list', prev_url + ',' + url);
    }
  }
}


