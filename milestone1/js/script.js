/*
  - stampare la lista
  - far in modo che cliccando sull'item diventi sbarrato 
*/

const root = new Vue({

  el: '#root',

  data: {

    logo: 'boolean',
    button: 'Aggiungi alla lista',

    obj: [
      {
        text: 'Cose da fare',
        done: false,
      },
      {
        text: 'Cose da ',
        done: false,
      },
      {
        text: 'Cose fare',
        done: false,
      },
      {
        text: ' fare',
        done: false,
      },
    ],
  },




});