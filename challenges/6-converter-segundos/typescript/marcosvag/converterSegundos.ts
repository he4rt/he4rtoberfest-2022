const totalSegundos = parseInt(process.argv[2]);

function converterSegundos(segs: number): void {
    const formatarString = (el: number): string => `${el < 10 ? '0' : ''}${el}`;

    const horas = formatarString(Math.trunc(segs / 3600));
    const minutos = formatarString(Math.trunc((segs % 3600) / 60));
    const segundos = formatarString((segs % 3600) % 60);

    console.log(`${horas}:${minutos}:${segundos}`);
}

converterSegundos(totalSegundos)