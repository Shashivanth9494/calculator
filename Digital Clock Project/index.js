function clock()
{
    var date = new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if (hh>=12)
    {
        am_pm="PM"
        if (hh>=13)
        {
            hh-=12;
        } 
    }
    if (hh==0)
    {
        hh=12;
    }
    if (mo==0)
    {
        mo="Jan";
    }
    else if (mo==1)
    {
        mo="Feb";
    }
    else if (mo==2)
    {
        mo="Mar";
    }
    else if (mo==3)
    {
        mo="Apr";
    }
    else if (mo==4)
    {
        mo="May";
    }
    else if (mo==5)
    {
        mo="Jun";
    }
    else if (mo==6)
    {
        mo="Jul";
    }
    else if (mo==7)
    {
        mo="Aug";
    }
    else if (mo==8)
    {
        mo="Sep";
    }
    else if (mo==9)
    {
        mo="Oct";
    }
    else if (mo==10)
    {
        mo="Nov";
    }
    else
    {
        mo="Dec";
    }
    var fullTime = hh+":"+mm+":"+ss+" "+am_pm
    var fullDate = dd+"/"+mo+"/"+yy
    switch(1)
    {
        case 0:
            day="Sunday"
            document.getElementById("a").style.backgroundImage="URL(./Sunday.jpg)"
        break;
        case 1:
            day="Monday"
            document.getElementById("a").style.backgroundImage="URL(./Monday.jpg)"
        break;
        case 2:
            day="Tuesday"
            document.getElementById("a").style.backgroundImage="URL(./Tuesday.jpg)"
        break;
        case 3:
            day="Wednesday"
            document.getElementById("a").style.backgroundImage="URL(./Wednesday.jpg)"
        break;
        case 4:
            day="Thursday"
            document.getElementById("a").style.backgroundImage="URL(./Thursday.jpg)"
        break;
        case 5:
            day="Friday"
            document.getElementById("a").style.backgroundImage="URL(./Friday.jpg)"
        break;
        case 6:
            day="Saturday"
            document.getElementById("a").style.backgroundImage="URL(./Saturday.jpg)"
        break;
    }
    document.getElementById("Date").innerHTML=fullDate
    document.getElementById("Time").innerHTML=fullTime
    document.getElementById("Day").innerHTML=day
    var refreshtheclk=setTimeout(function(){clock()})
}
function greet()
{
    var greettime = new Date()
    var time= greettime.getTime()
    if (time>=6&&time<=12)
    {
        document.getElementById("textgreet").innerHTML="Good Morning"
    }
    else if (time>=12&&time<=16)
    {
        document.getElementById("textgreet").innerHTML="Good Afternoon"
    }
    else
    {
        document.getElementById("textgreet").innerHTML="Good Evening"
    }
    document.getElementById("greet").removeAttribute("style")
}
var greettimeout=setTimeout(greet,5000)
function closetab()
{
    document.getElementById("greet").setAttribute("style","display:none")
}
