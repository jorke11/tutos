function Calculator(){
    this.init=()=>{
        let entrada1 = $("#entrada1")
        let entrada2 = $("#entrada2")
        let operation = $("#operations")
        
        $("#btn_send").click(function(){
            let total = 0;

            //console.log( entrada1.val() + operation.val() + entrada2.val())

            total = eval(entrada1.val() + operation.val() + entrada2.val())

            /*if(operation.val() == '*'){
                total = entrada1.val() * entrada2.val()
            }else if(operation.val() == '+'){
                total = parseInt(entrada1.val()) + parseInt(entrada2.val())
            }*/

            

            $("#resultado").val(total)

            console.log(total)
            //console.log(entrada2.val())
            //console.log(operation.val())
        })
        
    }
}

var objeto=new Calculator()
objeto.init()
