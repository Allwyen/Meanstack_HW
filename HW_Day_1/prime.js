module.exports.primecheck=(n)=>{
    var m=n/2;
    var flag=0;
    for(var i=2;i<=m;i++)    
    {    
        if(n%i==0)    
        {    
            console.log("Not a Prime Number");    
            flag=1;    
            break;    
        }    
    }    
    if(flag==0)    
    {
        console.log("Prime Number");
    }     
}    