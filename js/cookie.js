// JavaScript Document
/*****
cookie：在用户的电脑存储内容
存储空间：5k-10k;
存储条目：50条
不安全
同一域名下
*****/
function setCookie(name,value,iDay){
	var oDate=new Date();

	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+"="+value+";expires="+oDate;
	}

function getCookie(name){
	//user=tangcai; tangcai; sex=man 
	//user=tangcai,tangcai,sex=man
	var arr=document.cookie.split("; ");
	
	for (var i=0; i<arr.length; i++){
		
		var arr2=arr[i].split("=");
		//[user,tangcai]
		if (arr2[0]==name){
			return arr2[1];
			}
		}
	return false;
	//alert(arr);
	//console.log(document.cookie);
	}

function removeCookie(name){//删除setCookie 一定要会用
	
	setCookie(name,'1',-1);
	}

//setCookie('sex','man',30);
removeCookie('sex');
//alert(document.cookie);
//alert(getCookie('user'));
//alert(getCookie('user'));
