let count = 0;
const counts =  $(".counts") ;
const entries = $(".entries").text();
let arr=[];
 const add = ()=>{ 
        count++;
        counts.text(count)
}

  const sub = ()=>{
     if(count===0){
        count = 0;
     }
     else{
        count--;
     }
     counts.text(count);
}

$("#add").click(add);
$("#sub").click(sub);
$(".reset").click(()=>{
    count = 0 ;
    counts.text(count)
});
$("#save").click(()=>{

      // arr.push(count);
//    let entry = count + " -";
//    $(".entries").text(entries+""+ entry);
     if(arr.length===9){
      arr.shift();
     }
     else{
      arr.push(count);
     }


    $(".entries").text(entries+" "+arr.join("-"));
    console.log()
   
  
});


