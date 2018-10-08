# colorRandom
Código hecho en JavaScript nativo orientado a objeto que retorna un color aleatoriamente.



## Example

```
      // hacemos un objeto con la configuracion que pasaremos como parametro
            let objcolor1 = {
                saturation: saturation.value, // optional
                ligthness: ligthness.value, // optional
                opacity: opacity.value // optional
            }
      // instanciamos e llamamos al metodo getRandomColor que nos retornara un color en hsl
            let rcolor = new ColorRandom(objcolor1);
            // accedemos al color
            let color = rcolor.getRandomColor();

```
