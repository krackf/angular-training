
//TODO: Implement hexToRgb
export function hexToRgb(hex:string):{r:number,g:number,b:number}{
    let size=hex.length;
    if (size===3) return hexToRgb(hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2])
    //if (size===3) return hexToRgb(`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]})     identique mais en écriture
    //en coloration html, "f"="ff", "a"="aa", "3"="33" ...
    let [r,g,b]=[0,2,4]
    .map(offset=>hex.substring(offset,offset+2))
    .map(hexCh=>parseInt(hexCh,16));
    return {r,g,b};
}

//TODO: Implement rgbToHex
export function rgbToHex(r:number,g:number,b:number):string{
    //let Hex=r.toString(16) + g.toString(16) + b.toString(16);
    //return Hex;

    //let temp=[r,g,b]
    //.map(ch => ch.toString(16))
    //.join('');
    //return temp

    return [r,g,b]
    //.map(function(ch){ return Math.max(0,Math.min(ch,255))})
    .map(ch=>Math.max(0,Math.min(ch,255)))
    .map(ch=>ch.toString(16))
    .map(ch=>ch.length===1 ? "0"+ch:ch)
    .join('');
    //join = concatene les chiffres avec comme séparateur ce qu'il y a entre les quotes
    //donc ici concanetation directe, sinon   .join(':') avec : entre les chiffres

    //let a=[r,g,b].map(function(ch){ return Math.max(0,Math.min(ch,255))})
    //console.log(a);
    //.map est une boucle où ch va successivement prendre les valeurs (r,g,b) et à chaq boucle retourner un array
    // si (r,g,b) = (300,-10,50)
    // r=300    donc Math.min(300,255)=255   et Math.max(0,255)=255
    // g=-10    donc Math.min(-10,255)=-10   et Math.max(0,-10)=0
    // b=50     donc Math.min(50,255)=50   et Math.max(0,50)=50
    // => Array (300,-10,50) va donner (255,0,50)

    //let b=a.map(ch => ch.toString(16))
    //console.log(b);
    //Array (123,67,0) => (7b,43,0)

    //let c=b.map(ch => ch.length===1 ? "0"+ch:ch)
    //console.log(c);
    //Array (123,67,0) => (7b,43,00)

    //console.log(rgbToHex(123,67,0));      => 7b4300
    //console.log(rgbToHex(300,67,-10));    => ff4300
}
