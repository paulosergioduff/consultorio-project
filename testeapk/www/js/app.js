 function cancelarLocacao($tempo){
    	if ($tempo < 24) {
    		return false;
    	}else{
    		return true;
    	}
    }

  function reservarApp($data){
    localStorage.setItem("dataParaSala", $data);
    setTimeout( function() {

                window.location.href = "calendario-sala.html";//"salas-horarios-disponiveis.html";

        }, 500 ); 
  }

  function agendarApp($data){

  	let faixaDeHorario = localStorage.getItem("faixahorario");
  	let faixaDaSala = localStorage.getItem("faixaDaSala");

  				$data = $data.replace(/\//g, "-");
  				let quartoAtual = faixaDaSala;
  				let assinaturaOriginal = $data; 

                  var dataDemo = {
                                nome: "João", Local: "SP", country: "validando sobreescrendo fdfdixom 23e agora? novidade com false agora confirmando novo usado em app.js central",
                                capital: false, population: 1860000, assinatura: $data, faixaAssinatura: assinaturaOriginal };

                 valida_search('agendamento', 'assinatura', $data);
                 
                // alert('Reserva: '+resultadoReserva+' - Data: '+$data);
                 //xrud_read('agendamento');

                 setTimeout( function() {

                 let resultadoReserva = localStorage.getItem('agendamento');

				  if (resultadoReserva != $data) {
                 	xrud_send('agendamento', $data, dataDemo);
                 	// Se o número dessa data acumulada na variável, for igual ao número de salas
                 	// disponíveis, executar comando abaixo (complementar cadastro de salas)
                 	alert('Agendamento confirmado com sucesso! -> <br>'+$data);

                   setTimeout( function() {

                window.location.href = "escolher.html";

        }, 500 );   
                 	
                 }
                 	else{
                 		alert('Esse dia não tem este horário disponível '+$data+' - r:'+resultadoReserva);
                 		// Aumentar 1 variável n++ para a pesquisa
                 	}
				}, 500 );         

                       
                 //xrud_send('agendamento', $data, dataDemo);
                  	                 
                }

      function confirmaCadastro($data){

    let faixaDeHorario = localStorage.getItem("faixahorario");
    let faixaDaSala = localStorage.getItem("faixaDaSala");

          //$data = faixaDeHorario+'-'+$data.replace(/\//g, "-");
          let quartoAtual = faixaDaSala;
          let assinaturaOriginal = $data; 

                  var dataDemo = {
                                email: $data, nome: "João", Local: "SP", country: "validando sobreescrendo fdfdixom 23e agora? novidade com false agora confirmando novo usado em app.js central",
                                capital: false, population: 1860000, assinatura: $data, faixaAssinatura: assinaturaOriginal };

                 valida_cadastro('cadastro', 'nome', $data);
                 
                // alert('Reserva: '+resultadoReserva+' - Data: '+$data);
                 //xrud_read('agendamento');

                 setTimeout( function() {

                 let resultadoReserva = localStorage.getItem('cadastro');

          if (resultadoReserva != $data) {
                  //xrud_send('cadastro', $data, dataDemo);
                  // Se o número dessa data acumulada na variável, for igual ao número de salas
                  // disponíveis, executar comando abaixo (complementar cadastro de salas)
                  alert('Completando cadastro: '+$data);
                    window.location.href = "completar-cadastro.html";
                 
                 }
                  else{
                    console.log('Seu cadastro já está completo '+resultadoReserva);
                    // Aumentar 1 variável n++ para a pesquisa
                  }
        }, 500 );         

                       
                 //xrud_send('agendamento', $data, dataDemo);
                                     
                }

      function confirmarDia($dia){
      	window.document.getElementById('recebeData').innerHTML = '<center><h1>Deseja reservar esse dia: '+$dia+'?</h1><center>';
      }

   function selecionarSala($sala){
   		              localStorage.setItem("faixaDaSala", $sala);
   		              let saidaSala = localStorage.getItem("faixaDaSala");
   		              console.log(saidaSala);
   		              window.document.getElementById('style').innerHTML = '';
   		              var salaSelecionada = localStorage.getItem("faixaDaSala");

   		              setTimeout( function() {

						    window.location.href = "pordata.html";

				}, 500 );   

   }


   function selecionarHorario($horario){
                    localStorage.setItem("faixaDoHorario", $horario);
                    let saidaHorario = localStorage.getItem("faixaDoHorario");
                    console.log(saidaHorario);
                    window.document.getElementById('style').innerHTML = '';
                    var horarioSelecionada = localStorage.getItem("faixaDoHorario");

                    setTimeout( function() {

                window.location.href = "calendario-sala.html";

        }, 500 );   

   }

   function verSalaReservada($data){
                    localStorage.setItem("verSalaReservada", $data);

                    setTimeout( function() {

                window.location.href = "verSalaReservada.html";

        }, 500 );   

   }

   function checkin($assinatura){
      localStorage.setItem("checkin", $assinatura);
      setTimeout( function() {

                window.location.href = "checkin.html";

        }, 500 );
   }