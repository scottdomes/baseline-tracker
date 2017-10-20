export default class FetchResource {
  static get(url) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers: headers
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data);
              });
            } else {
              reject(response);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static post(url, body) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers: headers,
          body: JSON.stringify(body),
          method: 'POST'
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static postParams(url, body) {
    return new Promise((resolve, reject) => {
      this.getEncodedHeaders().then(headers => {
        fetch(url, {
          headers: headers,
          body: body,
          method: 'POST'
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static patch(url, body) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers: headers,
          body: JSON.stringify(body),
          method: 'PATCH'
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static getImageHeaders() {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'multipart/form-data'
      });
      resolve(headers);
    });
  }

  static getEncodedHeaders() {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      resolve(headers);
    });
  }

  static getHeaders() {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      });
      resolve(headers);
    });
  }

  static delete(url) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          method: 'DELETE',
          headers: headers
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static postImage(url, uri) {
    var photo = {
      uri: uri,
      type: 'image/jpeg',
      name: 'photo.jpg'
    };
    var form = new FormData();
    form.append('file', photo);
    return new Promise((resolve, reject) => {
      if (UserStore.connected) {
        this.getImageHeaders().then(headers => {
          fetch(url, {
            headers: headers,
            method: 'POST',
            body: form
          })
            .then(data => {
              resolve(data);
            })
            .catch(err => {
              reject(err);
            });
        });
      } else {
        reject('No internet connection.');
      }
    });
  }
}
