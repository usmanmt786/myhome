
let slag=0,check=0,sur=0
 


function borderit(){
    let divpass = document.getElementById('divpass')
    divpass.classList.add('pass')
    divpass.style.border='1px solid #1877f2'
    

    
}
function borderout(){
    let divpass=document.getElementById('divpass')
    divpass.classList.remove('pass')
    divpass.style.border='1px solid rgb(209, 205, 205)'

}

 
function show(){
            let eye=document.getElementById("show-butt")
            let eye2=document.getElementById("hide-butt")
            eye.style.visibility='visible'
            document.getElementById("pass-word").style.color="black"
            
            if(document.getElementById("pass-word").value==''){
                eye.style.visibility='hidden'
                eye2.style.visibility='hidden'
                document.getElementById("pass-word").style.color="rgb(197, 197, 197)"

                
            }
            
            if(document.getElementById("pass-word").value!='' && slag==1){

                eye.style.visibility='hidden'
                eye2.style.visibility='visible'
                
            }
    
}
function hide(){
    let eye1=document.getElementById("show-butt")
    let eye2=document.getElementById("hide-butt")
    eye1.style.visibility="hidden"
    eye2.style.visibility='visible'
   slag=1
    
    document.getElementById("pass-word").type='text'

}
function showw(){
    let eye=document.getElementById("show-butt")
    let eye2=document.getElementById("hide-butt")
    eye.style.visibility='visible'
    eye2.style.visibility='hidden'
    slag=0
   
    document.getElementById("pass-word").type='password'
    
}
function create(){
    document.getElementById("create-body").style.visibility="visible"
    document.getElementById("create-body").style.position="fixed"
    document.getElementById("create-body").style.top="0"
    document.getElementById("body").style.overflow="hidden"
    document.getElementById("firname").focus()
    document.getElementById("firname").style.color="rgb(197, 197, 197)"


}
function cose(){
    document.getElementById("create-body").style.visibility="hidden"
    document.getElementById("body").style.overflow="scroll"
    check=0
    
   
}
function changecolor(){
    document.getElementById("email1").style.color="black"
    if(document.getElementById("email1").value==''){
        document.getElementById("email1").style.color="rgb(197, 197, 197)"
    }

    
}
function phchange(){
    document.getElementById("firname").style.color=""
}
function inputdetails(){
    document.getElementById("firname").style.color="black"
    document.getElementById("surname").style.color="black"
    document.getElementById("email").style.color="black"
    document.getElementById("newpass").style.color="black"

    if(document.getElementById("firname").value==''){
        document.getElementById("firname").style.color="#080808"
    }
    if(document.getElementById("surname").value==''){
        document.getElementById("surname").style.color="#080808"
    }  
    if(document.getElementById("email").value==''){
        document.getElementById("email").style.color="#080808"
    } 
     if(document.getElementById("newpass").value==''){
        document.getElementById("newpass").style.color="#080808"
    }
}
$(document).ready(function(){
    $("#firname").blur(function(){
        check=1

        if($(this).val()==""){
            $(this).addClass('error')
            document.getElementById("firname").classList.replace("erros","erro")
            
        }
       
        $("#hint1").hide()
    })
    $("#firname").click(function(){
        $(this).removeClass("error")
        document.getElementById("firname").classList.replace("erro","erros")
        if(check==1){
            $("#hint1").show()
        }
        
    })
    $("#surname").blur(function(){

        if($(this).val()==""){
        $(this).addClass('error')
        document.getElementById("surname").classList.replace("erros","erro")
        }
        $("#hint2").hide()
    })
    $("#surname").click(function(){
        $(this).removeClass("error")
        document.getElementById("surname").classList.replace("erro","erros")
        if(sur==1){
            $("#hint2").show()
        }
         sur=1
        
    })
    $("#email").blur(function(){
        
        $(this).addClass('error')
        document.getElementById("email").classList.replace("erros","erro")
    })
    $("#email").click(function(){
        $(this).removeClass("error")
        document.getElementById("email").classList.replace("erro","erros")
        
    })
    $("#newpass").blur(function(){
        
        $(this).addClass('error')
        document.getElementById("newpass").classList.replace("erros","erro")
    })
    $("#newpass").click(function(){
        $(this).removeClass("error")
        document.getElementById("newpass").classList.replace("erro","erros")
        
    })
    $("#loginform").validate({
        rules:{
            fir:{
                minlength:4,
                required:true
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                
                

            }
        }
    })
    $("#cose").click(function(){
        $("#loginform").trigger("reset")
        
    })
    
   
})
