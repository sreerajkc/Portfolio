var i=1;
function ChangePage()
{
    var s = String("#"+i);
    document.getElementById("a").href=s;
    i++;
    if(i>2)
    {
        i=0;
    }

}
function Initial()
{
    i=1;
    window.scroll(
        {
            behavior: 'auto',
            top:-200,
            left:0
            
        }
        
    );                                                                                                                                                                                                                                
}
document.addEventListener("DOMContentLoaded",Initial);


