var submitBtn=document.querySelector(".btn");
            submitBtn.addEventListener("click",function(e){
               e.preventDefault();
               var wgt= Number(document.getElementById("js-wght").value);
            var hgt= Number(document.getElementById("js-hght").value);
            var actHgt=(hgt/100)**2;
            var bmi=wgt/actHgt;
            bmi=bmi.toFixed(2);
           var rslt=document.querySelector(".result");
           if(bmi<18.5){
                rslt.innerText="Your BMI is " + bmi + " and you are Underweight";
           }
            else if(bmi>18.5 && bmi<25){
                rslt.innerText="Your BMI is " + bmi + " and you are Normal or Healthy weight";
        
            }
            else if(bmi>=25 && bmi<30){
                rslt.innerText="Your BMI is " + bmi + " and you are Overweight";
            }
            else if(bmi>=30){
                rslt.innerText="Your BMI is " + bmi + " and you are Obese";
            }
            var hideRem=document.getElementById("res");
            hideRem.classList.remove("show");
        });
