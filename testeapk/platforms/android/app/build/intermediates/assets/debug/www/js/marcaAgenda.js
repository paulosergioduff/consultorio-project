      var listaGlobal = "";
              var stringReservados = [];
              var limitesDeQuarto = 4;
              
              var salaSelecionada = localStorage.getItem("faixaDaSala");

              

              if (typeof salaSelecionada === "undefined") {
                localStorage.setItem("faixaDaSala", "s1");
              } 

              //alert(salaSelecionada);

                                  var reservado = true;
                                  var listagemString = 0;
              
                                  function xrud_miniController($content){
                                    
                                  let saida = JSON.parse($content);
                                         
              
                                  for(var k in saida) {            
                                    
              
                                     if (k =='assinatura'){           
                              
              
                                      // VERIFICAÇÃO DE DATA E SALAS
              
              
                                     // console.log(saida[k]+'console');
                                      let filtroString = saida[k].replace(/\//g, "-");
                                      let horariosReservados = localStorage.getItem('faixahorario');
                                      //Aparencia mapa
                                      let dataString = filtroString;
                                      var stringReservados = stringReservados + ' ' +dataString + ' ,';
                                      let pagina = window.document.getElementById('style').innerHTML;
                                      console.log(dataString+' saida');
                                      //console.log(pagina);
                                      window.document.getElementById('style').innerHTML = pagina+'<style> .'+dataString+'{ color: white;  background: red !important; a.'+dataString+' a:link{ color:white;} </style>';
              
              
              
                                      // colocar formato de data igual nos dois arquivos
                                      // Usar queryString para manipular CSS da classe data
                                     }
                                  }
              
                               //   alert(stringReservados);
              
                                  
                              }
                    
                     function revelarReservadas($strings){
                        alert($strings);
                     }
              
                      // implementation 
                  xrud_search('agendamento', 'Local', 'SP')
                  //xrud_send('agendamento', 'newdoc', dataDemo);
                  //xrud_delete('empresas', 'SF');
                 // xrud_read('agendamento/10/30');
              
                 
                  