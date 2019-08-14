var count;
for(var n=2;n<=500;n++)
{
    count=0;
    for(var i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            count++;
            break;
        }
    }
    if(count==0 && n!=1)
    {
        console.log(n);
    }  
}