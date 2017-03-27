
function reloj(){
    var tiempo = new Date();
    
    var s = tiempo.getSeconds()*6;
    var m = tiempo.getMinutes()*6 + s/60;
    var h = tiempo.getHours()*30 + m/12;
    
    var rotSeg = "rotate("+s+"deg)";
    var rotMin = "rotate("+m+"deg)";
    var rotHora = "rotate("+h+"deg)";
    
    $("#segundo").css({"transform":rotSeg})
    $("#Minuto").css({"transform":rotMin})
    $("#hora").css({"transform":rotHora})
    
    }    
$(document).ready(function(){
    setInterval(reloj, 1000);
});