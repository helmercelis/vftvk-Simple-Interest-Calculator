var monto ;
var monto1
var monto_comas2 ;
var monto_comas3 ;
var tasa;
var tasa2;
var periodo;
var calculado1=((monto*(tasa*.01))*periodo);
var calculado2=((monto*(tasa*.01))*periodo).toFixed(2);
var calculado3;
var cadena;
const d = new Date();
var nuevaFecha= d.getFullYear();
var nuevaFecha2;
      function sliderChange (val) {
        document.getElementById('sliderStatus').innerHTML =val;
		tasa=val
		tasa2=document.getElementById('sliderStatus').innerHTML 
		console.log("dentro del sliderChange",val);
		 console.log(val);
		 console.log("tasa",tasa,"tasa2",tasa2);
		 console.log("salgo de sliderChange");
		 return val;
      };
    function computeInterest()
	{
     monto =Number( document.getElementById('principal').value);
      console.log("monto",typeof monto);
     tasa= document.getElementById('sliderStatus').innerHTML; 
     monto_comas2=monto.toFixed(2); 
     monto_comas3=monto_comas2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     periodo= document.getElementById('years').value;
	 calculado1=monto*((tasa*.01))*periodo;
     calculado2=calculado1.toFixed(2); 
    calculado3 = calculado2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    /* document.getElementById('calculado').innerHTML = calculado1;*/
     console.log("monto",monto);
     console.log("tasa",tasa);
     console.log("periodo",periodo);
     console.log(calculado1);
	  console.log(calculado2);
	   console.log(calculado3);
	  /*console.log(document.getElementById('calculado').innerHTML)*/
	  nuevaFecha2=Number(nuevaFecha)+Number(periodo);
	  console.log("fecha futura",nuevaFecha2);
    cadena="If you deposit "+monto_comas3+" at an interest rate of "+tasa+"%.  You will receive an amount of "+calculado3+" in the year "+nuevaFecha2;
	 console.log("cadena",cadena);
   document.getElementById('cadena').innerHTML = cadena;
   return cadena;
	    }
     
