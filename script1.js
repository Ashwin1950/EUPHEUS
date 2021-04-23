function showmark(){
  changenone();
  const input = document.getElementById("mark").value;
  // const psg = document.getElementById("psg");
  // const ngp = document.getElementById("ngp");
  // const kct = document.getElementById("kct");
  // const hin = document.getElementById("hin");
  // const dummy = document.getElementById("dummy");
  
  /*switch(true){
    case input >= 95:
    const show1 = kum.style.display = "block";
    case input >= 98:
    const show2 = psg.style.display = "block";

  }*/
  if(input >= 90){
    kct.style.display = "block";
  }
  if(input >= 98){
    psg.style.display = "block";
  }
  if(input >= 70){
    ngp.style.display = "block";
  }
  if(input >= 75){
    hin.style.display = "block";
  }
  if(input >= 95){
    cit.style.display = "block";
  }
  if(input >= 95){
    gct.style.display = "block";
  }
 if(input >= 85){
    rtc.style.display = "block";
  }
  if(input >= 85){
    acet.style.display = "block";
  }
  if(input >= 82.5){
    dit.style.display = "block";
  }
  if(input >= 75){
    ctk.style.display = "block";
  }
  if(input >= 77.5){
    kce.style.display = "block";
  }
  if(input >= 87.5){
    srec.style.display = "block";
  }
  if(input >= 87.5){
    skcet.style.display = "block";
  }
   if(input >= 80){
    tce.style.display = "block";
  }
   if(input >= 80){
    skct.style.display = "block";
  }
   if(input >= 72.5){
    sakthi.style.display = "block";
  }
   if(input >= 75){
    maharaja.style.display = "block";
  }
  if(input >= 68){
    rec.style.display = "block";
  }
  if(input >= 70){
    eshwar.style.display = "block";
  }
  if(input >= 65){
    ait.style.display = "block";
  }
  if(input >=66.25 ){
    kathir.style.display = "block";
  }
  if(input >= 63){
    ktvr.style.display = "block";
  }
 if(input >= 60){
    easa.style.display = "block";
  }
 if(input >= 65){
    kalaignar.style.display = "block";
  }
 if(input >= 70){
    kgisl.style.display = "block";
  }
 if(input >= 58.75){
    ppg.style.display = "block";
  }
 if(input >= 65){
    ace.style.display = "block";
  }
 if(input >= 55.5){
    jan.style.display = "block";
  }
 if(input >= 72.5){
    kpr.style.display = "block";
  }
if(input >= 63.25){
    park.style.display = "block";
  }
if(input >= 55.5){
    cms.style.display = "block";
  }
if(input >= 55.5){
    jan.style.display = "block";
  }

  if(input <=40 && input >=1){
    dummy.style.display = "block";
    dummy.innerHTML= "OOPS!!! No colleges match your Cutoff!";
  }
  if(input == 0){
    dummy.style.display = "block";
    dummy.innerHTML= "Please enter a Cutoff value!!";
  }
  
}

function changenone(){
  dummy.style.display = "none";
  psg.style.display = "none";
  kct.style.display = "none";
  ngp.style.display = "none";
  hin.style.display = "none";
  gct.style.display = "none";
  rtc.style.display = "none";
  acet.style.display = "none";
  dit.style.display = "none";
  ctk.style.display = "none";
  kce.style.display = "none";
  skcet.style.display = "none";
  tce.style.display = "none";
  srec.style.display = "none";
  rtc.style.display = "none";
  skct.style.display = "none";
  maharaja.style.display = "none";
  sakthi.style.display = "none";
  rec.style.display = "none";
  eshwar.style.display = "none";
  ait.style.display = "none";
  kathir.style.display = "none";  
  ktvr.style.display = "none";
  easa.style.display = "none";
  kalaignar.style.display = "none";
  ppg.style.display = "none";
  ace.style.display = "none";
  jan.style.display = "none";
  park.style.display = "none";
  kpr.style.display = "none";
  cms.style.display = "none";
}

function time(){
  setTimeout(showmark,2000);
}

function calccutoff(){
  event.preventDefault();
  var mark1 = document.getElementById("mark1").value;
  var mark2 = document.getElementById("mark2").value;
  var mark3 = document.getElementById("mark3").value;

  var cutoff=((mark1/2)+(mark2/4)+(mark3/4)).toFixed(2);
  // console.log(cutoff);
  document.getElementById("mark").value = cutoff;
}