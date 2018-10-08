class ColorRandom{
    constructor(obj){
        this.saturation = obj.saturation;
        this.ligthness = obj.ligthness;
        this.opacity = obj.opacity;

        this.default()
    }
    getRandomColor(){
        let hue = Math.floor((Math.random() * 360) + 1);
        let saturation =  Math.floor((Math.random() * 100) + 1);

        let hsla = `${hue},${this.saturation}%,${this.ligthness}%,${this.opacity}`;
        return  `hsla(${hsla})`;
    }

    default(){
        if(this.saturation === undefined || this.saturation === ""){
            this.saturation = "50";
        }

        if(this.ligthness === undefined || this.ligthness === ""){
            this.ligthness = "50";
        }
        if(this.opacity === undefined || this.opacity === ""){
            this.opacity = "1";
        }
    }
}