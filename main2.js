window.onload = populateSelect();

function populateSelect() {
  // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
  var xhr = new XMLHttpRequest(),
    method = "GET",
    overrideMimeType = "application/json",
    url = "items.json"; // ADD THE URL OF THE FILE.

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // PARSE JSON DATA.
      var theList = JSON.parse(xhr.responseText);

      var ele = document.getElementById("sel");
      for (var i = 0; i < theList.grocery_items.length; i++) {
        // BIND DATA TO <select> ELEMENT.
        ele.innerHTML =
          ele.innerHTML +
          "<option value=>" +
          theList.grocery_items[i].name +
          "</option>";
        console.log(i);
      }
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}

function show(ele) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById("msg");
  msg.innerHTML = "Selected Item: <b>" + ele.options[ele.selectedIndex].text;
}
