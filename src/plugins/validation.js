const validation = {
  required(v) {
    return !!v || 'Поле обязательно для заполнения';
  },
  number(v) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(v)) || 'Вводите только цифры'
  }
}


export default {
  install(Vue) {
    Vue.prototype.$validation = validation;
  }
}