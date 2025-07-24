var tamil=document.getElementById("tamil")
var english=document.getElementById("english")
var maths=document.getElementById("maths")
var science=document.getElementById("science")
var social=document.getElementById("social")
var tTotalmark=document.getElementById("tmark")
var tAverage=document.getElementById("taverage")
var tGrade=document.getElementById("tgrade")
var submitbtn=document.getElementById("submit")

submitbtn.addEventListener( "click" , function(Event){ 
var Tamil = Number(tamil.value)
var English = Number(english.value)
var Maths = Number(maths.value)
var Science = Number(science.value)
var Social = Number(social.value)
var total= Tamil+English+Maths+Science+Social
var average= total/5 
var averagemark=average
if(averagemark>90){
    tGrade.innerHTML = "Grade:A+"

}
else if(averagemark>80){
    tGrade.innerHTML = "Grade: A"
    }
else if(averagemark>70){
    tGrade.innerHTML = "Grade:B+"

}
else if(averagemark>60){
    tGrade.innerHTML = "Grade:B"

}
else if(averagemark>50){
    tGrade.innerHTML = "Grade:C+"

}
else if(averagemark>40){
    tGrade.innerHTML = "Grade:C"

}
else {
    tGrade.innerHTML = "Grade: D"
}

tAverage.innerHTML="Average : " +  average + "%"
tTotalmark.innerHTML="Total mark : " + total


} )