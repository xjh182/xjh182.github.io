		var i = 3;
		var b = 3;
		var vid;
		function fClear()
		{
			var aXZ=document.getElementsByClassName('xz');
			for (var m = 0; m < aXZ.length; m++) {
				if (b!=3)
				{
					if (b<3)
					{
						aXZ[m].style.background="#ccc";
						aXZ[m].style.color="#000";
						aXZ[b-1].style.background="#000";
						aXZ[b-1].style.color="#fff";
					}
					else if (b>3)
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

		window.onload=function()
		{
			setInterval(function(){
				var oDiv1=document.getElementById('gamejieshao');
				var oDiv2=document.getElementById('topback');
				oDiv1.style.top=oDiv2.offsetHeight+'px';
			},100);


			var oLeft=document.getElementById('left');
			var oRight=document.getElementById('right');
			var aXZ=document.getElementsByClassName('xz');
			oRight.onclick=function()
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
					if (a>3)
					{
						document.getElementById('a'+(a-1)).style.background='#000';
						document.getElementById('a'+(a-1)).style.color="#fff";
					}
					else if (a==3)
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
			oLeft.onclick=function()
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
					if (a>3)
					{
						document.getElementById('a'+(a-1)).style.background='#000';
						document.getElementById('a'+(a-1)).style.color="#fff";
					}
					else if (a==3)
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

			var oVleft=document.getElementById('v_left');
			var oVright=document.getElementById('v_right');
			oVleft.onclick=function()
			{
				if (vid==1)
				{
					vplay.src='video/op.webm';
					vplay.play();
					vid=3;
				}
				else if (vid==3)
				{
					vplay.src='video/pv2.mp4';
					vplay.play();
					vid=2;
				}
				else if(vid==2)
				{
					vplay.src='video/pv1.mp4';
					vplay.play();
					vid=1;
				}
			}
			oVright.onclick=function()
			{
				if (vid==1)
				{
					vplay.src='video/pv2.mp4';
					vplay.play();
					vid=2;
				}
				else if (vid==2)
				{
					vplay.src='video/op.webm';
					vplay.play();
					vid=3;
				}
				else if (vid==3)
				{
					vplay.src='video/pv1.mp4';
					vplay.play();
					vid=1;
				}
			}
			var guanbi1=document.getElementById('guanbi1');
			var oRenwujiexi=document.getElementById('renwujiexi');
			guanbi1.onclick=function()
			{
				oRenwujiexi.style.display="none";
			}
		}
		
		function jiexia()
		{
			var oRenwujiexi=document.getElementById('renwujiexi');
			var aoi=document.getElementById('jiexi_aoi');
			var miyuki=document.getElementById('jiexi_miyuki');
			oRenwujiexi.style.display="block";
			miyuki.style.display="none";
			aoi.style.display="block";
		}
		function jiexim()
		{
			var oRenwujiexi=document.getElementById('renwujiexi');
			var miyuki=document.getElementById('jiexi_miyuki');
			var aoi=document.getElementById('jiexi_aoi');
			oRenwujiexi.style.display="block";
			aoi.style.display="none";
			miyuki.style.display="block";
		}