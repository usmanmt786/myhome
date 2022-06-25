
var flag=0,operator=0,slag=0,num1="",num2="",count=0
   

function buttonclick(val){
    
    if(val!='+' && val!='-' && val!='=' && val!='/' && val!='*'){
      if(flag==0){
        document.getElementById("scr").value=document.getElementById("scr").value+val
        count=count+1
      }else{
        document.getElementById("scr").value=val
        flag=0
        count=1
      }
    
  
    }else if(val!='='){
      flag=1
      if(val=='+'){
        operator=1
        num1=parseFloat(document.getElementById("scr").value)
        count=0
      }else if(val=='-'){
        operator=2
        num1=parseFloat(document.getElementById("scr").value)
        count=0
      }else if(val=='*'){
        operator=3
        num1=parseFloat(document.getElementById("scr").value)
        count=0
      }else{
        operator=4
        num1=parseFloat(document.getElementById("scr").value)
        count=0
      }

    }else if(num1!=""){
      
     if(slag==0){
      num2=parseFloat(document.getElementById("scr").value)
     }
     slag=1
      if(operator==1){
        num1=document.getElementById("scr").value=num1+num2
      }else if(operator==2){
        num1=document.getElementById("scr").value=num1-num2
      }else if(operator==3){
        num1=document.getElementById("scr").value=num1*num2
      }else{
        num1=document.getElementById("scr").value=num1/num2
      }

    }

    
}
function cleardisplay(){

    document.getElementById("scr").value=""
    flag=0
    slag=0
    operator=0
    num1=""
    num2=""
    count=0

}
function del(){
  if(count!=0){
    var str=document.getElementById("scr").value
    let ha=str.split('')
    ha.pop()
    let fin = ha.toString().replace(',','')
    
    document.getElementById("scr").value=fin
    count=count-1
  }
  
}

