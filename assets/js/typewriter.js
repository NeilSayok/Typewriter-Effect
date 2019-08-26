

function TypeWriter(id,interval){
    this.id = id;
    this.iterval = interval;
    this.textElement = null;
    this.text = "";
    this.c = 0;
    this.timeout = null;
}

TypeWriter.prototype = {
    constructor : TypeWriter,
    refreshData : function (ch){
                    this.textElement.textContent += String(ch);
                    
                    if(this.c<this.text.length){
                        this.c++;
                       
                        var context = this;
                        //console.log(context.constructor.name); 
                    //setTimeout(context.refreshData(context.text.charAt(context.c)), 120);
                        this.timeout = setTimeout(() => {                                         context.refreshData(context.text.charAt(context.c));}, context.iterval);

                    }else{
                        clearTimeout(this.timeout);
                        return;
                    }
                },
    beginTyping : function (){
                    this.textElement = document.getElementById(this.id);
                    this.text = this.textElement.textContent;
                    this.textElement.innerHTML = "";
                    this.refreshData(this.text.charAt(this.c));
                    return;
                },
    stopTyping: function (){
                            this.textElement.textContent = this.text;
                            clearTimeout(this.timeout);
                            return;
                        }
};

/* CALL THE FUNCTION LIKE THIS
window.onload = function() {
    var autotypeH1 = new TypeWriter("heading1",116);
    autotypeH1.beginTyping();
}*/