var inputs=document.getElementsByClassName('inputform');
for(var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElement.classList.add('fijar');
        }
        else{
            this.nextElement.classList.remove('fijar');
        }
    });
}
