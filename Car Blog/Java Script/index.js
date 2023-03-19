var userId="ramu@gmail.com"
var pass="123"

function logintowebpage()
{
    var userGivenID=document.getElementById("usid").value
    var userGivenPass=document.getElementById("pass").value 
    if(userId==userGivenID && pass==userGivenPass)
    {
        var fom=document.forms
        fom[0].action="../Asset/Car blog.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenID && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML("Wrong password Entered")
        document.getElementById("passdiv").style.borderColor="Red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,purple,red)"
    }
    else if(userId==userGivenID && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML("Wrong user Id Entered")
        document.getElementById("emaildiv").style.borderColor="Red"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    }
    else{
        document.getElementById("result").innerHTML="Wrong User id and Password"
        document.getElementById("emaildiv").style.borderColor="Red"
        document.getElementById("passdiv").style.borderColor="Red"
        document.body.style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("alt","Z")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("alt","Y")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
    