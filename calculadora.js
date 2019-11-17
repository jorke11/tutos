function Calculator(){
    this.init=() => {
        let content = "",temp="";
        let entrada1 = $("#entrada")
        let result_temp = $("#result_temp")
        
        $("#btn_1").click(function(){
            content += $(this).text()
            temp += $(this).text()
            entrada1.val(temp)
        })

        $("#btn_2").click(function(){
            content += $(this).text()
            temp += $(this).text()
            entrada1.val(temp)
        })
        
        $("#div_5").click(function(){
            content += 5            
            temp += 5            
            entrada1.val(temp)
        })

        $("#btn_plus").click(function(){         
            temp = "";
            content += "+"
        })

        $("#btn_result").click(function(){
            entrada1.val(eval(content))
            //console.log(content)
        })
        
        
    }
}


var objeto=new Calculator()
objeto.init()
