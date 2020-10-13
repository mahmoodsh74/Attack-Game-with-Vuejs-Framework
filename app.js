new Vue({
    el: "#app",
    data: {
        title: 'فکر کردی می تونی از من تخفیف بگیری ؟',
        damage: 100,
        goodImg: './img/1.jpg',
        badImg: './img/2.jpg',
        kick: './play/PUNCH.mp3',
        finalkick: './play/attack.mp3'
    },
    methods:{
        damageDown(){
           if (this.damage >= 0) {
                this.damage -= 20;
           }
           if (this.damage == 0) {
               this.title = 'تو خیلی قوی هستی اینم کد تخفیفت : sgjkqer2f5'
           }
        },
        play(sound){
            if (sound && this.damage >= 0) {
                let audio = new Audio(sound);
                audio.play();
            }
        }
    }

});