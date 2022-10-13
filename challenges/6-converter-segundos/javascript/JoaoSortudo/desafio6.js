let n = process.argv[2]

    let horas = parseInt(n / 3600);
    let minutos = parseInt((n % 3600) / 60);
    let segundos = (n % 3600) % 60;

    if (horas < 10) {
        horas =  `0${horas}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}` 
    }

    console.log(horas,":", minutos, ":", segundos);
