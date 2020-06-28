var rect={
	perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};

function cal_rect(l,b){
	console.log("Calculating for rectangle with l="+l+" and b="+b);
	if(l<=0 || b<=0){
		console.log("Dimensions of rectangle must be greater than 0, l="+l+" and b="+b);

	}
	else{
		console.log("Perimeter of rectangle with l="+l+" and b="+b+ " is "+rect.perimeter(l,b));
		console.log("Area of rectangle with l="+l+" and b="+b+" is "+rect.area(l,b));
	}
}

cal_rect(9,8);
cal_rect(6,3);
cal_rect(0,5);
cal_rect(9,-4);