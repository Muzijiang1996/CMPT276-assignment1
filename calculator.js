 function calmean(){

	var total =4;
    var gra1= document.getElementById("g1").value;
    var tol1= document.getElementById("t1").value;
    var per1=(gra1/tol1);
    var gra2= document.getElementById("g2").value;
    var tol2= document.getElementById("t2").value;
    var per2=(gra2/tol2);
    var gra3= document.getElementById("g3").value;
    var tol3= document.getElementById("t3").value;
    var per3=(gra3/tol3);
    var gra4= document.getElementById("g4").value;
    var tol4= document.getElementById("t4").value;
    var per4=(gra4/tol4);
    if (gra1.trim() =='' && tol1.trim() == ''){
    	per1=0;
    	total= total-1;
    }
    else if(gra1.trim() == ''|| tol1.trim() == ''){
    	alert("Error input!!");
    }
    if (gra2.trim() == ''&&tol2.trim() == ''){
    	per2=0;
    	total=total-1;
    }
    else if(gra2.trim() == ''||tol2.trim() == ''){
    	alert("Error input!!");
    }
    if (gra4.trim() == ''&&tol4.trim() == ''){
    	per4=0;
    	total=total-1;
    }
    else if(gra4.trim() == ''||tol4.trim() == ''){
    	alert("Error input!!");
    }
    if (gra3.trim() == ''&&tol3.trim() == ''){
    	per3=0;
    	total=total-1;
    }
    else if(gra3.trim() == ''||tol3.trim() == ''){
    	alert("Error input!!");
    }
    if(total == 0){
    	alert("You didn't input anything!!");
    }
	else{
  	var mean=(per1+per2+per3+per4)/total;
	document.getElementById("mean").innerHTML = "MEAN = "+mean.toFixed(4)*100+"/100"};
}


 function calweight(){
	var total =4;
    var gra1= document.getElementById("g1").value;
    var tol1= document.getElementById("t1").value;
    var w1=document.getElementById("w1").value;
    var per1=(gra1/tol1)*100;
    var gra2= document.getElementById("g2").value;
    var tol2= document.getElementById("t2").value;
    var w2=document.getElementById("w2").value;
    var per2=(gra2/tol2)*100;
    var gra3= document.getElementById("g3").value;
    var tol3= document.getElementById("t3").value;
    var w3=document.getElementById("w3").value;
    var per3=(gra3/tol3)*100;
    var gra4= document.getElementById("g4").value;
    var tol4= document.getElementById("t4").value;
    var w4=document.getElementById("w4").value;
    var per4=(gra4/tol4)*100;
    if (gra1.trim() =='' && tol1.trim() == '' && w1.trim() == ''){
    	per1=0;
    	total= total-1;
    	w1=0;
    }

    else if(gra1.trim() == ''|| tol1.trim() == '' ||w1.trim() == ''){
    	alert("Error input!!");
    }
    if (gra2.trim() == ''&&tol2.trim() == ''&& w2.trim() == ''){
    	per2=0;
    	total=total-1;
    	w2=0;
    }
    else if(gra2.trim() == ''||tol2.trim() == ''&& w2.trim() == ''){
    	alert("Error input!!");
    }
    if (gra3.trim() == ''&&tol3.trim() == ''&& w3.trim() == ''){
    	per3=0;
    	total=total-1;
    	w3=0;
    }
    else if(gra3.trim() == ''||tol3.trim() == ''|| w3.trim() == ''){
    	alert("Error input!!");
    }
    if (gra4.trim() == ''&&tol4.trim() == ''&& w4.trim() == ''){
    	per4=0;
    	total=total-1;
    	w4=0
    }
    else if(gra4.trim() == ''||tol4.trim() == ''|| w4.trim() == ''){
    	alert("Error input!!");
    }
    if(total == 0){
    	alert("You didn't input anything!!");
    }
	else{
	var totalw=parseInt(w1)+parseInt(w2)+parseInt(w3)+parseInt(w4);
  	var weight=(((per1*w1)+(per2*w2)+(per3*w3)+(per4*w4))/totalw);
	document.getElementById("weight").innerHTML = "WEIGHT = "+ weight.toFixed(4)+ "/100"};

 }

function p1(){
    var g1= document.getElementById("g1").value;
    var t1= document.getElementById("t1").value;
    var p1=(g1/t1);
    if(g1.trim() != ''&&t1.trim() != ''){
     document.getElementById("p1").innerHTML = p1.toFixed(4)*100+"%"
 }
}
function p2(){
    var g2= document.getElementById("g2").value;
    var t2= document.getElementById("t2").value;
    var p2=(g2/t2);
    if(g2.trim() != ''&&t2.trim() != ''){
     document.getElementById("p2").innerHTML = p2.toFixed(4)*100+"%"
 }
}
function p3(){
    var g3= document.getElementById("g3").value;
    var t3= document.getElementById("t3").value;
    var p3=(g3/t3);
    if(g3.trim() != ''&&t3.trim() != ''){
     document.getElementById("p3").innerHTML = p3.toFixed(4)*100+"%"
 }
}
function p4(){
    var g4= document.getElementById("g4").value;
    var t4= document.getElementById("t4").value;
    var p4=(g4/t4);
    if(g4.trim() != ''&&t4.trim() != ''){
     document.getElementById("p4").innerHTML = p4.toFixed(4)*100+"%"
 	}
 }

