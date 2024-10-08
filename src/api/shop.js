/**
 * Mocking client-server processing
 */


const _products = [
    { 'id': 1, 'title': 'Посторонний', 'author': 'Альбер Камю', 'price': 269, 'inventory': 100, 'publishing_house': 'АСТ','image': 'thestranger'},
    { 'id': 2, 'title': 'На дороге', 'author': 'Джек Керуак', 'price': 332, 'inventory': 100, 'publishing_house': 'АСТ','image': 'ontheroad'},
    { 'id': 3, 'title': 'Щегол', 'author': 'Донна Тартт', 'price': 1270, 'inventory': 50, 'publishing_house': 'Corpus','image': 'thegoldfinch'}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }