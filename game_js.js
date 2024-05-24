var cas;

function inizia() {
    div = document.getElementById('Personaggio');
    div.style.left = '500px';
    div.style.top = '0px';

    altezza = screen.height*0.89; // calcolo altezza schermo
    alt = document.getElementById('AreaDiGioco');
    alt.style.height=altezza+'px'; // dimensiono l'altezza in base allo schermo

    alt2 = document.getElementById('Menù');
    alt2.style.height=altezza+'px';

    CreaNemico();
   
}

window.onload=inizia;

// funzione che muove il personaggio e lo fa indicare nella giusta direzione

var destra = true; // variabile che fa cambiare animazione al personaggio

function Muovi(eTastiera)
{
    var margDx=screen.width-document.getElementById('AreaDiGioco').width;
    var tasto = eTastiera.which; 

    
    if(tasto == 97)//SINISTRA
    {
        if(parseInt(div.style.left) >10)
        {
          div.style.left = parseInt(div.style.left)-5+'px';

          if(destra==true)  // serve per far cambiare la gif (senza l'if, se si tiene premuto la gif non funge)
          {
            document.getElementById('Personaggio').src="/Img/pg2.gif";
            destra = false;
          }
        
        }
    }
    else if(tasto == 100)//DESTRA
    {
        if(parseInt(div.style.left) < 786)
        {
          div.style.left = parseInt(div.style.left)+5+'px';

          if(destra==false) // serve per far cambiare la gif (senza l'if, se si tiene premuto la gif non funge)
          {
            document.getElementById('Personaggio').src="/Img/pg1.gif";
            destra = true;
          }
          
        }
    }
}

// funzione che crea i nemici da evitare (posizione casuale)

function CreaNemico()
{
  // creo elemento

    let img = document.createElement('img');
    img.style.position = 'absolute';
    img.src="/Img/piccionesx.gif"; 
    img.id='piccione';
    var o =document.getElementById('AreaDiGioco').appendChild(img);

    // posizione nemico casuale

    var margDx=visualViewport.width;
    

    lato = Posizione();

    if(lato%2==0) // destra 
    {
      
      img.src="/Img/piccionesx.gif"; 
      var pos = Posizione();
      document.getElementById('piccione').style.top = pos+'px';


      let des = document.getElementById('AreaDiGioco').style.width;
      document.getElementById('piccione').style.left='94%';
      
      
      // mettere lato destro

    }
    else // sinistra
    {
        img.src="Img/piccionedx (1).gif";
        var pos = Posizione();
        document.getElementById('piccione').style.top = pos+'px';

        document.getElementById('piccione').style.left='0px';


        // mettere lato sinistro
    }

    // far muovere nemico
    
}

// funzione che ritorna un numero causale

function Timer() {
  return Math.random(2,5);
}

function Posizione() {

  var margTop=visualViewport.height+100;
  return Math.floor(Math.random() * (margTop - 101)) + 100;
 
}   
