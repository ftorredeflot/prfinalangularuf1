//
//a. crea amb JavaScript un objecte Equip 
//b. utilitza addPlayer()  per afegir-hi els 4 jugadors.
//c.  mostra en  HTML la informació dels 4 jugadors.
//d. utilitza getPlayer()  per mostrar la informació d’un jugadors segons el nick.
//e. Utilitza getPlayerMaxPunts() per mostrar en el HTML la informació del jugador amb major puntuació.
//f. Utilitza updatePlayer() per actualitzar la puntuació d’un jugador perquè tingui la major puntuació. Torna a mostrar enel HTML el jugador amb major puntuació.


var equip = new Equip("patata",50,20,"agresiu");


var p1 =new Jugador("farlopez","victor","funcio",50);


console.log(equip.nom);

function Equip(nom,win,lose,tipus){
    this.nom=nom;
    this.win=win;
    this.lose=lose;
    this.tipus=tipus;
    this.jugadors = [];
    this.addPlayer = function(jugador){
        this.jugadors.push(jugador);
    };
    this.getPlayer = function(nickname){
        for (var player in this.jugadors){
          if(player.nom.equals(nickname)){
              var ok = player;
          }  
        }
        return ok;
    };
    this.delPlayer = function(nickname){
        var player;
        for (player in this.jugadors){
          if(player.nom.equals(nickname)){
              var index = this.jugadors.indexOf(player);
              if (index > -1){
                  this.jugadors.splice(index, 1);
              }
          }  
        }
    };
    this.getPLayerMaxPunts = function(){
        var punts=0;
         for (var player in this.jugadors){
          if(player.punts>punts){
              punts=player.punts;
              var res = player;
          }  
        }
        return res;
    };
}

function Jugador(nick,nom,funcio,punts){
    this.nickname=nick;
    this.nom=nom;
    this.funcio=funcio;
    this.punts=punts;
    
    this.updatePlayer = function (param) {

        this.nom = param.name || this.nom;
        this.funcio = param.name || this.funcio;
        this.punts = param.points || this.punts;

    };
}
