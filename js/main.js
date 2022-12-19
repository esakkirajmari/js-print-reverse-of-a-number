var n=parseInt (prompt("enter the two digit value"));
var a=n.toString().length;
var sum;
var b=n;
var c=0;
for(i=1;i<=a;i++){
	sum=b%10;
	b=(b-sum)/10;
	c=c*10+sum;
}
document.write(c);
