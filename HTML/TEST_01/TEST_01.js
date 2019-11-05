

// == 值比较 ===类型比较
  function $(id){
  	
  	return typeof id === 'string' ?document.getElementById(id):id;
  	
  }
  
window.onload = function (){
	
	//获取title div
	var titles = $('head').getElementsByTagName('li');
//	alert(titles.length);
var divv = $('context').getElementsByTagName('div');

 if(titles.length != divv.length) return;
 
 for(var i=0;i<titles.length;i++){
	var li = titles[i];
	li.id = i;

	li.onmousemove = function(){
		
		for(var j=0; j<titles.length;j++){
//				alert(0);
				titles[j].className = '';
		divv[j].style.display ='none';
		}
	this.className = 'select';
    divv[this.id].style.display = 'block';

	}

 }

}



/*
// == 值比较 ===类型比较
  function $(id){
  	
  	return typeof id === 'string' ?document.getElementById(id):id;
  	
  }
window.onload = function(){
//	//拿到所有的li 和 li 对应的内容
//	
	var titles = $('head').getElementsByTagName('li');
////	alert(titles.length);
 var divv = $('context').getElementsByTagName('div');
 if(titles.length != divv.length) return;
 
 for(var i=0;i<titles.length;i++){
	var li = titles[i];
	li.id = i;
	

	li.onmousemove = function(){
		
		for(var j=0; j<titles.length;j++){
//				alert(0);
				titles[j].className = '';
		divv[j].style.display ='none';
		}
	this.className = 'select';
    divv[this.id].style.display = 'block';

			
	}

 }


//	for(var j=0; j<titles.length;j++){
//		titles[j].className = '';
//		divv[this.id].style.display ='none';
//	}


//	}
	

   console.log(titles.length,divv.length);
  }
*/