function check(){
    let w=+document.getElementById("wieght1").value;
    let h=+document.getElementById("hight1").value;
    let res="";
    if(w=="" || h==""){
        w=0,h=0;
        res= " No data";
    }else {
        let bmi=w/(h*h);
        if (bmi < 18)
          res ="Underweight";
        else if (bmi < 25.0)
            res= "Normal";
        else if (bmi < 30.0)
            res="Overweight";
        else
            res="Obese";
    }
    document.getElementById("valueCheck").innerHTML= res;
}