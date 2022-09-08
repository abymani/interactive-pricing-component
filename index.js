let slider = document.getElementById("myRange");
let toggle = document.getElementById('myToggle');
let views = document.getElementById('views');
let price = document.getElementById('price');
let priceingPlan = document.getElementById('plan');
let mode= 'm';

// changing pageviews and price based on slider value 
slider.oninput = function(){
    views.innerHTML = slider.value + "k pageviews";
    price.innerHTML = "$" + priceCalculator();
};

// changing color of slider based on slider position
slider.addEventListener('mousemove',function(){
    let value = slider.value/2;
    let color = `linear-gradient(90deg,hsl(174, 86%, 45%) ${value}% , hsl(224, 65%, 95%) ${value}%)`;
    slider.style.background = color;
});
 // calculating price based on slider value 
function priceCalculator(){

    if(mode ==='m'){   
      return  Math.round(slider.value * 16)/100;
    }
    else if(mode === 'y'){
        //multiplied by 9 becuase of 25% discount otherwise it would be 
        // multiplied by 12
        return Math.round(slider.value * 16 * 9)/100;
    }
}

// handling toggle button click and changing plan between monthly and yearly
toggle.addEventListener('click',function(){
    if(toggle.checked == true){
        mode = 'y';
        priceingPlan.innerHTML = "/yearly";
        price.innerHTML = "$" + priceCalculator();
    }
    else {
        mode = 'm';
        priceingPlan.innerHTML = "/monthly";
        price.innerHTML = "$" + priceCalculator();
    }
});