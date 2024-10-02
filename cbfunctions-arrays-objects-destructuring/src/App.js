
import './App.css';

function App() {
  let CalculateResult=(
    engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    socMarks,
    sciMarks,
    passFn,
    failFn
 )=>{
  let passMarks=35;
  if(engMarks>=passMarks&&
    telMarks>=passMarks&&
    hindiMarks>=passMarks&&
    mathsMarks>=passMarks&&
    socMarks>=passMarks&&
    sciMarks>=passMarks


  ) {passFn(); } else {failFn();}}

  CalculateResult(99,88,77,66,55,44,
    ()=>{console.log("Student passed in Tenth");},
    ()=>{console.log("Student failed in Tenth");}

   );


   let anuMarks={
    engMarks:91,
    telMarks:92,
    hindiMarks:93,
    mathsMarks:94,
    socMarks:95,
    sciMarks:96,
    calculateMarks:()=>{
      console.log("Calculate the Marks for Anu")
    }};
   console.log(anuMarks);
   anuMarks.calculateMarks();


    let {engMarks,telMarks,hindiMarks,mathsMarks,socMarks,sciMarks}=anuMarks;
    console.log(engMarks);
    console.log(telMarks);
    console.log(hindiMarks);
    console.log(mathsMarks);
    console.log(socMarks);
    console.log(sciMarks);



let harithaMarks=[81,82,83,84,85,86];
   console.log(harithaMarks[2]);

   let [hariEngMarks,,hariHindiMarks,,hariSocMarks,hariSciMarks]=harithaMarks;

   console.log(hariEngMarks,hariHindiMarks,hariSocMarks,hariSciMarks);
 
   
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
