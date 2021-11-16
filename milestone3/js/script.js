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

    error: false,
  },

  methods: {

    removeOnClick(index){
      this.obj.splice(index,1)
      console.log(index);
    },

    addList(){

      this.obj.push(
        {
          text : this.newStr.trim(),
          done : false
        });

        this.newStr = '';
        
        if(this.newStr.trim().length < 3 && this.newStr.trim().length == 0){
          this.error = true;

        } 


        console.log('ok');

      
    },

    // errorLIst(){

    //   if(this.newStr.trim().length < 3 && this.newStr.trim().length == 0){
    //     this.error = true;
    //   } 
    //   console.log('ok');
    // }
  },

});