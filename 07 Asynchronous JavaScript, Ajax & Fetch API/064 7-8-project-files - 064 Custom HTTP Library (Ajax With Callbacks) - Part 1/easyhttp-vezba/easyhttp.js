function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (this.http.status === 200) {
      callback(null, this.http.response);
    } else {
      callback('Error: ' + this.http.status);
    }
  }.bind(this)

  this.http.send();
};