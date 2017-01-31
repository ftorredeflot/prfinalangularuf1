var equip = new Equip;

function Equip(){
    this.nom;
    this.win;
    this.lose;
    this.tipus;
    this.jugadors = [];
    this.addPlayer = function(jugador){
        this.jugadors.push(jugador);
    };
    this.getPlayer = function(nickname){
        for each (var player in jugadors){
          if(player.nom.equals(nickname)){
              var ok = player;
          }  
        }
        return ok;
    };
    this.delPlayer = function(nickname){
        for each (var player in jugadors){
          if(player.nom.equals(nickname)){
              var index = jugadors.indexOf(player);
              if (index > -1){
                  jugadors.splice(index, 1);
              }
          }  
        }
    };
    this.getPLayerMaxPunts = function(){
        var punts=0;
         for each (var player in jugadors){
          if(player.punts>punts){
              punts=player.punts;
              var res = player;
          }  
        }
        return res;
    };
}

function Jugador(){
    this.nickname;
    this.nom;
    this.funcio;
    this.punts;
    
    this.updatePlayer=function (name,pos,points){
        if(name!=null){
            this.nom=name;           
        }
        
          if(pos!=null){
            this.funcio=pos;
        }
        
          if(points!=null){
            this.punts=points;
        }
    };
}
