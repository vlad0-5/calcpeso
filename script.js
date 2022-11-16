function root(){
    var m = parseInt( document.getElementById("m").value);
    var f = 2;
    var i=1;
    var sum=0;
    while(i<=m){
        b=Math.pow((2*i),2)-1
        sum=sum+Math.pow((2*i),2)/b
        i=i+1
    }
    var result=f*sum;
    document.getElementById('Raiz').innerHTML=result;
    }

 function root2(){
    var w = parseInt( document.getElementById("w").value);
    var h = parseInt( document.getElementById("h").value);
    var f = 703;
    var result= f*(w/Math.pow(h,2))
    if(result<18.5 ){
        document.getElementById('Raiz2').innerHTML=result+"<br>tienes un peso bajo";
    }
    if(result>18.5 && result<25){
        document.getElementById('Raiz2').innerHTML=result+"<br>tienes un peso normal";
    }
    if(result>24.9 && result<30){
        document.getElementById('Raiz2').innerHTML=result+"<br>tienes exceso de peso";
    }
    if(result>30){
        document.getElementById('Raiz2').innerHTML=result+"<br>tienes obesidad";
    }
}