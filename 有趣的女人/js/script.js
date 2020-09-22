		var i = 2;
		var b = 2;
		var vid;
		function fClear()
		{
			var aXZ=document.getElementsByClassName('xz');
			for (var m = 0; m < aXZ.length; m++) {
				if (b!=4)
				{
					if (b<4)
					{
						aXZ[m].style.background="#ccc";
						aXZ[m].style.color="#000";
						aXZ[b-1].style.background="#000";
						aXZ[b-1].style.color="#fff";
					}
					else if (b>4)
					{
						aXZ[m].style.background="#ccc";
						aXZ[m].style.color="#000";
						aXZ[b-2].style.background="#000";
						aXZ[b-2].style.color="#fff";
					}
				}
				else
				{
					aXZ[m].style.background="#ccc";
					aXZ[m].style.color="#000";
				}
			}	
		}
		function nr(n,t)
		{
			var aXZ=document.getElementsByClassName('xz');
			for (var m = 0; m < aXZ.length; m++) {
				aXZ[m].style.background="#ccc"
				aXZ[m].style.color="#000";
			}
			document.getElementById('c'+i).style.display="none";
			i=n;
			document.getElementById('c'+i).style.display="block";
			document.getElementById(t).style.background="#000";
			document.getElementById(t).style.color="#fff";
		}
		function toBlack(x)
		{
			document.getElementById(x).style.background='#000';
			document.getElementById(x).style.color="#fff";
		}

		var oLeft=document.getElementById('left');
		var oRight=document.getElementById('right');
		var aXZ=document.getElementsByClassName('xz');
		function onRight()
		{
			if (i!=5)
			{
				document.getElementById('c'+i).style.display="none";
				i++;
				if (b!=5)
				{
					b++;
				}
				else
				{
					b=1;
				}
				document.getElementById('c'+i).style.display="block";
				for (var m = 0; m < aXZ.length; m++) {
					aXZ[m].style.background="#ccc"
					aXZ[m].style.color="#000";
				}
				var a=i;
				if (a>4)
				{
					document.getElementById('a'+(a-1)).style.background='#000';
					document.getElementById('a'+(a-1)).style.color="#fff";
				}
				else if (a==4)
				{
					document.getElementById('a'+(a-1)).style.background='#ccc';
					document.getElementById('a'+(a-1)).style.color="#000";
				}
				else
				{
					document.getElementById('a'+a).style.background='#000';
					document.getElementById('a'+a).style.color="#fff";
				}
			}
			else
			{
				document.getElementById('c'+i).style.display="none";
				i = 1;
				b = 1;
				document.getElementById('c'+i).style.display="block";
				for (var m = 0; m < aXZ.length; m++) {
					aXZ[m].style.background="#ccc"
					aXZ[m].style.color="#000";
				}
				document.getElementById('a'+i).style.background='#000';
				document.getElementById('a'+i).style.color="#fff";
			}
		}
		function onLeft()
		{
			if (i!=1)
			{
				document.getElementById('c'+i).style.display="none";
				i=i-1;
				document.getElementById('c'+i).style.display="block";
				for (var m = 0; m < aXZ.length; m++) {
					aXZ[m].style.background="#ccc"
					aXZ[m].style.color="#000";
				}
				var a=i;
				if (a>4)
				{
					document.getElementById('a'+(a-1)).style.background='#000';
					document.getElementById('a'+(a-1)).style.color="#fff";
				}
				else if (a==4)
				{
					document.getElementById('a'+(a-1)).style.background='#ccc';
					document.getElementById('a'+(a-1)).style.color="#000";
				}
				else
				{
					document.getElementById('a'+a).style.background='#000';
					document.getElementById('a'+a).style.color="#fff";
				}
			}
			else
			{
				document.getElementById('c'+i).style.display="none";
				i = 5;
				document.getElementById('c'+i).style.display="block";
				for (var m = 0; m < aXZ.length; m++) {
					aXZ[m].style.background="#ccc"
					aXZ[m].style.color="#000";
				}
				var a=i;
				document.getElementById('a'+(a-1)).style.background='#000';
				document.getElementById('a'+(a-1)).style.color="#fff";
			}
		}

		//计时器效果
		var timer=null;
		function autoqiehuan(){
			timer=setInterval("onRight()",3000);
		}

		window.onload=function()
		{
			setInterval(function(){
				var oDiv1=document.getElementById('gamejieshao');
				var oDiv2=document.getElementById('topback');
				oDiv1.style.top=oDiv2.offsetHeight+'px';
			},100);

			var aImg=document.getElementsByClassName('me_img');
			var oVideoPlayer=document.getElementById('videoPlayer');
			var vplay=document.getElementById('vplay');
			for (var p = 0; p < aImg.length; p++) {
				aImg[p].onmouseover=function(){
					this.style.opacity="0.5";
				}
				aImg[p].onmouseout=function(){
					this.style.opacity="1";
				}
			}
			var guanbi=document.getElementById('guanbi');
			guanbi.onclick=function(){
				oVideoPlayer.style.display="none";
				vplay.currentTime = 0; 
				vplay.pause();
			}

			//计时器效果
			autoqiehuan();


			//当鼠标移入ID为tupianqiehuan的元素时，清除计时器
			document.getElementById('tupianqiehuan').onmouseover=function(){
				clearInterval(timer);
			}

			//当鼠标移ID为tupianqiehuan的元素时，打开计时器
			document.getElementById('tupianqiehuan').onmouseout=function(){
				autoqiehuan();
			}

			var oVleft=document.getElementById('v_left');
			var oVright=document.getElementById('v_right');
			oVleft.onclick=function()
			{
				if (vid==1)
				{
					vplay.src='video/11.mp4';
					vplay.play();
					vid=3;
				}
				else if (vid==3)
				{
					vplay.src='video/op.mp4';
					vplay.play();
					vid=2;
				}
				else if(vid==2)
				{
					vplay.src='video/pv.mp4';
					vplay.play();
					vid=1;
				}
			}
			oVright.onclick=function()
			{
				if (vid==1)
				{
					vplay.src='video/op.mp4';
					vplay.play();
					vid=2;
				}
				else if (vid==2)
				{
					vplay.src='video/11.mp4';
					vplay.play();
					vid=3;
				}
				else if (vid==3)
				{
					vplay.src='video/pv.mp4';
					vplay.play();
					vid=1;
				}
			}
		}