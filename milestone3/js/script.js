/*
  - quando viene cliccata la x l'elemento viene eliminato dall'array
*/

const root = new Vue({

  el: '#root',

  data: {

    logo: 'boolean',
    button: 'Aggiungi alla lista',
    newStr:'',
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

  methods: {

    removeOnClick(index){
      this.obj.splice(index,1)
      console.log(index);
    },

    addList(){
      //this.newText = this.newText.this.newStr

      this.obj.push({
        text : this.newStr,
        done : false
      });

      this.newStr = '';


    }

  },

});