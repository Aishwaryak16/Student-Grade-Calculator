const calcy = () =>{
    let wd = document.getElementById('wd').value;
    console.log(typeof(wd));
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let error = document.getElementsByClassName('error');
    let grades = "";
  
  
    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(totalGrades);
  
    let perc = (totalGrades/400) * 100;
    alert(perc);
  
    debugger;
 
    if(perc <= 100  && perc >= 85){
      grades = 'A';
    }else if(perc <= 84  && perc >= 65){
       grades = 'B';
    }else if(perc <= 64  && perc >= 45){
       grades = 'C';
    }else{
       grades = 'F';
    }
  
    if(perc >= 45.5){
      document.getElementById('showData').innerHTML = `Your grade is ${grades}. You are Pass. `
    }
    else{
      document.getElementById('showData').innerHTML = `Your grade is ${grades}. You are Fail. `
    }
    
    
  }
