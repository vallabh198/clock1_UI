function Time() {
    
    var ans = new Date();
    hour = ans.getHours();
    var minute = ans.getMinutes();
    var second = ans.getSeconds();
    period = "";
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    hour = update(hour);
    minute = update(minute);
    second = update(second);


    document.getElementById("digital-clock1").innerText = hour  ;
    document.getElementById("digital-clock2").innerText = minute  ; 
    document.getElementById("digital-clock3").innerText = second ;
    document.getElementById("digital-clock4").innerText = period;
    
    setTimeout(Time, 1000);
   }

   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
    
}
Time();


// function ValidateIt() {
//     if (document.getElementById('ddlProblemCategory').value == 0) {
//          alert("Please fill some value");
//          return false;
//     }
//          return true;
//   }
//   function DisableIt() {
//       if (ValidateIt() == true)
//         document.getElementById('btnSaveProblem').disabled = true;
// }  



function option(){
    obj = document.getElementById("wake_up_time");
    x = obj.options[obj.selectedIndex].text;
    document.getElementById("print").innerHTML = "   Wake Up Time = "+ x;

    obj = document.getElementById("set_lunch_time") ;
    y = obj.options[obj.selectedIndex].text;
    document.getElementById("print1").innerHTML = "   Lunch Time = "+y ;

    obj = document.getElementById("set_nap_time") ;
    z = obj.options[obj.selectedIndex].text;
    document.getElementById("print2").innerHTML = "   Nap Time = "+ z ;
    
    
}


// function option2(){
//     var x = 
    
//     document.getElementById("set_nap_time").value ;
//     document.getElementById("print2").innerHTML = x ;
    

// }
function setImage(){
    x = document.getElementById("wake_up_time").value ;

    y = document.getElementById("set_lunch_time").value ;

    z = document.getElementById("set_nap_time").value ;
    Q = hour + period;
        
    if (x == Q) {
        mode = "morning";
        
        
    }else if(y == Q){
        mode = "afternoon";
        

    }else if (z == Q){
        mode = "evening";
        

    }else{
        mode = NaN;
        
    }
    

    //setTimeout("location.reload(true);",mode)

   
    
    
    switch (mode) {
        case "morning":
           
            document.getElementById("setPic").src = "./morning.jpg";
           
        break;
        case "afternoon":
           
            document.getElementById("setPic").src = "./afternoon.png";
           
        break;
        case "evening":
           
            document.getElementById("setPic").src = "./evening.jpg";
           
        break;
    
        default:
           
            document.getElementById("setPic").src = "./allinone.jpg";
        break;
           
   
            
    }
    //document.getElementById("setPic")..setAttribute("style","width: 536px;height: 474px;border-radius: 4px;grid-column: 2;grid-row: 2;");

    
}setImage() ;  




    
