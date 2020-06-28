var rect=require('./rectangle');

function cal_rect(l,b){
	console.log("Calculating for rectangle with l="+l+" and b="+b);
	rect(l,b,(err,rectangle)=>{
		if(err){
		console.log("Error:",err.message);
	    }
	    else{
        console.log("Perimeter of rectangle with l="+l+" and b="+b+ " is "+rectangle.perimeter());
		console.log("Area of rectangle with l="+l+" and b="+b+" is "+rectangle.area());
	    }

	});

  console.log("This statement after call to rect()");
};

cal_rect(9,8);
cal_rect(6,3);
cal_rect(0,5);
cal_rect(9,-4);