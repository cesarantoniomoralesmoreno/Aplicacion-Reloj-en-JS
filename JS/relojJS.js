const mostrarReloj =() =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min= formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML=`${hr} : ${min} : ${seg}`;

    const meses =['Ene','Feb','Mar','Abril','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSemana = dias[fecha.getDay()]//Se usa este valor porque devuelve el numero del dia de la fecha 
    //a partir del dia domingo como primer valor de un arreglo [0] hasta el sab como ultimo valor [6].
    let dia = fecha.getDate();

    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes} ${año}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    

    document.getElementById('contenedor').classList.toggle('animar');  //con classList recuperamos todas clases tipo css 
    //que se estan aplicando a este elemento, con toggle funciona como un interruptor si esta aplicado el estilo
    // lo va a quitar y sino lo va a aplicar y se va a hacer una vez si y una vez no.

    document.getElementById('contenedor').classList.toggle('cambiarColor');
}

const formatoHora = (hora)=>{
 if(hora<10)
    hora= '0' + hora;
    return hora;
}

setInterval(mostrarReloj,1000)//como se debe llamar a la funcion mostrarReloj cada segundo para que actualice
//la hora en segundos debemos enviarle a la funcion setInterval dicha funcion y la cantidad en milisegundos que 
//queremos que se actualice dicha hora.

 