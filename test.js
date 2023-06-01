/* class Media {
    constructor(media_name, media_type, media_country) {
        this.media_name = media_name;
        this.media_type = media_type;
        this.media_country = media_country;
    }
    show_info() {
        console.log(`${this.media_name} is ${this.media_type} from ${this.media_country}`)
    }    
}
let RTS = new Media("Radio-televizija Srbije", "Public broadcaster", "Serbia")
RTS.show_info();
console.log(RTS);

class Journalist extends Media{
    
constructor(media_name, media_type, media_country, name, sector) {
    super(media_name, media_type, media_country);
        this.name = name;
        this.sector = sector;
    }
    show_data() {
        console.log(`${this.name} is a ${this.sector}` + ` in ${this.media_name}, ${this.media_type} from ${this.media_country}`)
    }
} */
/* let GB = new Journalist("Radio-televizija Srbije", "Public Broadcaster",et GB = new Journalist("Radio-televizija Srbije", "Public Broadcaster",et GB = new Journalist("Radio-televizija Srbije", "Public Broadcaster", "Serbia", "Goran Belanovic", "Web Journalist");
GB.show_data() */
/* 
console.log(GB.hasOwnProperty('show_data')); */

/* console.log("Poruka iz test.js"); */
let skup_niz = ["Beograd", "Obrenovac", 3, 4, 0, 3];
let skup = new Set(skup_niz);
/* console.log(skup.add(skup_niz)); */

/* for(let v of skup) {
    console.log(v);
} */
let mapa = new Map([["prvo", 4343],["drugo", 212]]);
mapa.set(343, 434344).set(43, "ksdfs")
/* console.log(mapa);
 */
let tekst = "Ovo je neki tekst";
let reg = new RegExp('O')

/* console.log(reg.test(tekst)) */

let sat = setInterval(() => {console.log("Pola sekunde")},500);
setTimeout(() => {clearInterval(sat)}, 10000)





