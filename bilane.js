let vous          = document.getElementById("vous");
let nous          = document.getElementById("nous");
let valuesVous     = document.getElementById("valuesVous")
let valuesNous     = document.getElementById("valuesNous");
let resultataVous = document.getElementById("resultataVous");
let resultataNous = document.getElementById("resultatNous");
let resulVous     = document.getElementById("resulVous");
let resulNous     = document.getElementById("resulNous");
let acser         = document.getElementById("acser");
let enregistrer   = document.getElementById("enregistrer");
let foter         = document.getElementById("foter");
let gaine_b       = document.getElementById("gaine_b");
let gaine_p         = document.getElementById("gaine_p");
let totale=0;
let totalNous = 0;
let totalVous = 0;
let valueVous=0;
let valueNous=0;
let numbergnienNous =0;
let numbergnienVous =0;
//display boutton and p
function display()
{
        gaine_b.classList.remove("gaine_b");
        gaine_p.classList.remove("gaine_p");
        gaine_b.classList.add("gaine_none");
        gaine_p.classList.add("gaine_none");   
}
//clear input
function clearinput()
{
valuesVous.value = ""
valuesNous.value=""
}
//pour calculer 
function calcule()
{
    
valueVous = +valuesVous.value;
valueNous = +valuesNous.value;
totalNous += valueNous;
totalVous += valueVous;
remplieChamp();
clearinput();
remplieresultat();
display()
clears(totalVous , totalNous)
}
//pour remplier le resultat li mousegline
function remplieresultat()
{
let pOne = document.createElement("p");
let pTow = document.createElement("p");
let divValue = document.createElement("div");
divValue.style.display = "flex";
divValue.style.width = "66%";
divValue.style.justifyContent = "space-between"
pOne.style.fontSize="20px";
pTow.style.fontSize="20px";
pOne.classList.add("pone");
pTow.classList.add("ptow");
pOne.innerHTML = valueVous;
pTow.innerHTML = valueNous;
divValue.appendChild(pOne);
divValue.appendChild(pTow);
foter.appendChild(divValue);
 
}
//disply non none pour button et p
function dispaly_non()
{
     gaine_b.classList.remove("gaine_none");
        gaine_p.classList.remove("gaine_none");
        gaine_b.classList.add("gaine_b");
        gaine_p.classList.add("gaine_p");
}
//pour verivier le gaine c'est qui
function clears(totalVou , totalNou )
{
if(totalVou >=100 || totalNou >= 100)
{
    if(totalVou > totalNou || totalNou > totalVou  )
    {
    foter.innerHTML="";
    resultataVous.innerHTML = 0;
    resultataNous.innerHTML = 0;
    if(totalVou > totalNou)
    {
       numbergnienNous += 1;
        vous.innerHTML = numbergnienNous;
        totalNous=0;
        totalVous=0;
       dispaly_non();
    }
    else
    {
        numbergnienVous += 1 ;
        nous.innerHTML = numbergnienVous; 
        totalNous = 0;
        totalVous = 0; 
      dispaly_non();
    }
        }
}
}
//pour arier un etaps
function arier()
{
totalNous -= valueNous;
totalVous -= valueVous;
valuesVous.value = valueVous;
valuesNous.value=  valueNous;
remplieChamp();
}
//remplie le champs de resultat
function remplieChamp()
{
resultataVous.innerHTML = totalVous;
resultataNous.innerHTML = totalNous;  
}
//pour changer le valeur
function changevaleur()
{
    let container;
    container = totalVous
    totalVous = totalNous;
    totalNous = container
remplieChamp()
 
}
//pour suprimer tous les champs (veri9e jedide)
function clearTous()
{
    totalVous = 0;
    totalNous = 0;
    totalVous = 0;
    totalNous = 0; 
    numbergnienVous=0;
    numbergnienNous=0;
    remplieChamp();
    nous.innerHTML = 0;
    vous.innerHTML = 0;
    clearinput();
    foter.innerHTML="";
    
}












