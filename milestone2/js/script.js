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
        text: 'Cose da fare oggi',
        done: false,
      },
      {
        text: 'Cose da fare domani',
        done: false,
      },
      {
        text: 'Cose da fare dopodomani',
        done: false,
      },
      {
        text: 'Cose da fare in giornata',
        done: false,
      },
    ],
  },




});