//
//a. crea amb JavaScript un objecte Equip 
//b. utilitza addPlayer()  per afegir-hi els 4 jugadors.
//c.  mostra en  HTML la informació dels 4 jugadors.
//d. utilitza getPlayer()  per mostrar la informació d’un jugadors segons el nick.
//e. Utilitza getPlayerMaxPunts() per mostrar en el HTML la informació del jugador amb major puntuació.
//f. Utilitza updatePlayer() per actualitzar la puntuació d’un jugador perquè tingui la major puntuació. Torna a mostrar enel HTML el jugador amb major puntuació.


var equip = new Equip("patata",50,20,"agresiu");


var p1 =new Jugador("farlopez","victor","funcio",50);
var p2 =new Jugador("metalman","javi","funcio",51);
var p3 =new Jugador("torrafa","paco","funcio",52);
var p4 =new Jugador("elnuclear","trump","funcio",53);

equip.addPlayer(p1);
equip.addPlayer(p2);
equip.addPlayer(p3);
equip.addPlayer(p4);

console.log(equip.nom);
console.log(equip.getPlayer("torrafa"));
console.log(equip.getPLayerMaxPunts());

//crear json
var a='{"name":"dddd"}';
//convertirlo en objecte
var obj = JSON.parse(a);
p1.updatePlayer(obj);
console.log(equip.getPlayer("farlopez"));
equip.delPlayer(p1.nickname);
console.log(equip.getPlayer("farlopez"));
console.log(p1);

function Equip(nom,win,lose,tipus){
    this.nom=nom;
    this.win=win;
    this.lose=lose;
    this.tipus=tipus;
    this.jugadors = [];
    this.addPlayer = function(jugador){
        this.jugadors.push(jugador);
    };
    this.getPlayer = function(nicknames){ 
        var ok;
        for (var player in this.jugadors){
          if(this.jugadors[player].nickname==nicknames){
              ok= this.jugadors[player];
          }  
        }
        return ok;
    };
    this.delPlayer = function(nickname){
        var player;
        for (player in this.jugadors){
          if(this.jugadors[player].nickname==nickname){
              var index = player;
              this.jugadors.splice(index, 1);
              
          }  
        }
    };
    this.getPLayerMaxPunts = function(){
        var punts=0;
        var res;
         for (var player in this.jugadors){
          if(this.jugadors[player].punts>punts){
              punts=this.jugadors[player].punts;
              res = this.jugadors[player];
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
        
        console.log(param);

        this.nom = param.name || this.nom;
        this.funcio = param.pos || this.funcio;
        this.punts = param.points || this.punts;

    };
}
