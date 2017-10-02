var galery=$(".galery")
var galery2=$(".galery2")
// var pos=css("left","200px")
var m;
var y=0;
var images=["img/1.jpg","img/2.jpeg","img/3.jpeg","img/4.jpeg","img/5.jpeg","img/6.jpeg",
"img/7.jpeg","img/8.jpeg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg",
"img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg",
"img/19.jpg","img/20.jpeg","img/21.jpg"]

for(i=0;i<=20;i++){



galery.append("<div class=items><img src="+images[i]+"></img></div>")




}
for(i=0;i<=20;i++){



galery2.append("<div class=items><img src="+images[i]+"></img></div>")


}


function qalx(){
	$(".galeries").css("bottom","0px")
}

$(window).on("load",qalx)

function coordinates(event){
	// while(xCor<1000+"px")
	var xCor=(event.clientX)
	if(xCor<645&&document.querySelector(".galeries").style.top<"660px"){
	var xCor=(event.clientX)
	// var yCor=event.clientY;
	// var xminCor=-(event.clientX)
	// document.querySelector(".galeries").style.left=xminCor+"px"
	
	document.querySelector(".galeries").style.right=xCor+"px"
	// document.querySelector(".galeries").style.top=xCor+"px"
	// document.querySelector(".galeries").style.left=xCor


	// console.log(xminCor)(document.querySelector(".galeries").style.right=xCor+"px"<"784px")
	// console.log(xCor)
	// document.querySelector("").style.right=xCor+"px"
	
}
}

$(".items").click(function(){
	$(this).css( "bottom","400px")
	$(this).css( "left","500")
	$(this).fadeOut(1000)
	$(".galeries").css("bottom","-180px")
	$(this).offset({top:250,left:645})
	$(".thumbs").css( "bottom","0px")


	
})

$(".items").click(function (){
	x=$(this).children().attr('src')
	$(".main").css("background-image","url("+x+")")
	$(".left").css("left","0px")
	$(".right").css("right","0px")
	console.log($(this).children())
	m=$(this).css("background-image","url("+x+")").index()
	console.log(m)
	
	 
})
$(".left").click(function(){
	if(m>0){
	m--
	$(".main").css("background-image","url("+images[m]+")")

}



})


	$(".thumbs").click(function(){
		$(".thumbs").css( "bottom","-60px")
		$(".galeries").css("bottom","0px")
		$(".left").css("left","-70px")
	$(".right").css("right","-70px")

	})
	$(".right").click(function(){
	if(m<images.length-1){
	m++
	$(".main").css("background-image","url("+images[m]+")")

}



})