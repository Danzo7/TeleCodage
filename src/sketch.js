let play;
let X=600,Y=300;
 let arr;

function setup() {
  createCanvas(X, Y);
    
document.getElementsByClassName("button")[0].onclick=()=>{
arr=document.getElementById("texted").value.split("").map(x=>+x).filter(x=>x==1||x==0);
 document.getElementById("texted").value=arr.join(""); 
};
 
}
nbz=(arr)=>{
if(arr==undefined||arr.length<=0)return ;
  let dir="up",
  defDrop=Y/2,
  cPos=0;
  
   for(i=0;i<=4;i++){
    linedash(0, (Y/4)*i, X, (Y/4)*i, 10)
  }
  for(i=0;i<arr.length;i++){
        stroke(0)

linedash((X/arr.length)*i, 0, (X/arr.length)*i, Y,10);
    textSize(32);
  
text(arr[i], ((X/arr.length)*i)+20, 40);
    stroke(255,0,0)
    strokeWeight(3);

      if(arr[i]==1){
        dir=dir=="down"?"up":"down";
        Ddrop=dir=="down"?Y/4:-Y/4;
        line(cPos,defDrop+Ddrop,cPos+=X/arr.length,defDrop+Ddrop)
        line(cPos-X/arr.length,defDrop-Y/4,cPos-X/arr.length,defDrop+Y/4)

}
    
    if(arr[i]==0){
        Ddrop=dir=="down"?Y/4:-Y/4;
        line(cPos,defDrop+Ddrop,cPos+=X/arr.length,defDrop+Ddrop)
      
}
strokeWeight(1);
}
}


function draw() {
  background(255);
    stroke(0)

  nbz(arr);
 
}