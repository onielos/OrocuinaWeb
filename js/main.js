//Reloj
function cargarReloj(){

    // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
    var fechahora = new Date();
    var hora = fechahora.getHours(); 
    var minuto = fechahora.getMinutes(); 
    var segundo = fechahora.getSeconds(); 
    
    // Variable meridiano con el valor 'AM' 
    var meridiano = "AM";
    
    
    // Si la hora es igual a 0, declaramos la hora con el valor 12 
    if(hora == 0){
    
        hora = 12;
        
    }
    
    // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
    if(hora > 12) {
    
        hora = hora - 12;
    
        // Variable meridiano con el valor 'PM' 
        meridiano = "PM";
    
    }
    
    // Formateamos los ceros '0' del reloj 
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
    
    // Enviamos la hora a la vista HTML 
    var tiempo = hora + ":" + minuto   + " " + meridiano;    
    document.getElementById("relojnumerico").innerText = tiempo;
    document.getElementById("relojnumerico").textContent = tiempo;
    
    // Cargamos el reloj a los 500 milisegundos 
    setTimeout(cargarReloj, 500);
    
    }
    
    // Ejecutamos la función 'CargarReloj' 
    cargarReloj();


    //Tiempo
  const apiKey = '74c9e65f5d9c4464f947661e0fbb96b3';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Orocuina&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const Tiempo = document.getElementById('tiempo');
      Tiempo.innerText = 
        data.main.temp + " °C";
    });
