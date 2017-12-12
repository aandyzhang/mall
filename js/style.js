window.onload=function() {
	 slip();   // 活动切换
    backgroundSlip();  //下面大的背景切换
    leftBar();    //左边列表
    changeWidth();  //当屏幕宽度改变时左边的导航栏位置发生改变
    dask();     //当点击登录按钮时，出现遮罩层
}

function slip(){
    var slip_nav=document.getElementById("slip_nav");
    var slip_title=slip_nav.getElementsByTagName("li");
    var slip_con=document.getElementById("slip_con");
    var slip_con1=slip_con.getElementsByTagName('div');
    if(slip_title.length!=slip_con1.length){
        return;
    }else{
        for(var i=0;i<slip_title.length;i++){
         slip_title[i].id=i;
         slip_title[i].onclick=function(){
         for(var j=0;j<slip_title.length;j++){
            slip_title[j].className='';
            slip_con1[j].style.display="none";
         }
             this.className='act';
             slip_con1[this.id].style.display='block';
         }
        }
    }
}

   // 背景切换效果
function backgroundSlip(){
    var quanqiu_top=document.getElementById("quanqiu_top");
    var b=quanqiu_top.getElementsByTagName("b");  //获取3个切换的按钮
     // var b1=document.getElementById("b");
    // var img=b.getElementsByClassName("img");
    var Con_top=document.getElementById("Con_top");
    var Con_tit=Con_top.getElementsByClassName("Con_tit");  
    // var Con_tit=Con_top.getElementsByTagName("div");
    // alert(Con_tit.length); 
    if(b.length!=Con_tit.length){
        return;
    }else{
        for(var i=0;i<b.length;i++){    // 0 1 2
              b[i].id=i;
          b[i].onclick=function(){
            for(var j=0;j<b.length;j++){
                Con_tit[j].style.display='none';
            }
            Con_tit[this.id].style.display='block';
           }
        }
    }

}

    // 左边列表栏的定位问题
function leftBar(){
    var center_left=document.getElementById("center_left");
     var tip=document.getElementById("tip");//230
     var topBack=document.getElementById("top_back");
     var imgs=document.getElementById("imgs");
    window.onscroll=function(){
    var top=document.documentElement.scrollTop||document.body.scrollTop;
    var height=132;
    if(top>=height){    
        center_left.style.cssText='position:fixed;bottom:0px;left:0px;';
        }else{
            center_left.style.position='static';
        }
    if(top>500){
        tip.style.cssText='opacity:1;filter:alpha(opacity=100);transform:scale(1);transition:all 0.5s;';

     }else{
         tip.style.cssText='opacity:0;filter:alpha(opacity=0);transform:scale(0.01);transition:all 0.5s;';
      }
      if(top>1120&&top<3500){
        imgs.style.cssText='position:fixed;top:0;left:235px';
      }else{
         imgs.style.cssText='position:static';
      }
      topBack.onclick=function(){
        $('html,body').animate({
            scrollTop:0
        },400);
      }
    }
}
function changeWidth(){
     changeleft();
     // window.onscroll=function(){
     //   var top=document.documentElement.scrollTop||document.body.scrollTop;
     //   if(top){
     //      changeleft();
     //    }
     // }
 }
 function changeleft(){
    window.onresize=function(){
    var width=document.documentElement.clientWidth;
    var center_left=document.getElementById("center_left");
    var nav_change=document.getElementById("nav_change");
       if(width<1348){
           center_left.style.display='none';
           nav_change.style.cssText='display:block;position:fixed;bottom:0;left:180px;';
       }
       else{
        center_left.style.display='block';
        nav_change.style.display='none';
       }
  }
}

function dask(){
    var login=document.getElementById("login");
    login.onclick=function(){
        create();
    var mouseTit=document.getElementById("dask-con-tit");
    var daskCon=document.getElementById("dask-con");
    var isDown=false;
        mouseTit.addEventListener('mousedown',function(e){
            var e=e||window.event;
            var daskWeight=daskCon.offsetLeft;
            var daskTop=daskCon.offsetTop;
            mouseoffSetX=e.clientX-daskWeight;   //获取当前鼠标的x坐标
            mouseoffSetY=e.clientY-daskTop;    //获取鼠标的y坐标
            isDown=true;
        })
        document.onmousemove=function(e){    //鼠标移动事件
            var e=e||window.event;
            var mouseX=e.clientX;
            var mouseY=e.clientY;
            var newX=0;
            var newY=0;
            if(isDown === true){
                            newX=mouseX-mouseoffSetX;
                            newY=mouseY-mouseoffSetY;
                            var daskCon=document.getElementById("dask-con");   
                            var d=daskCon.offsetWidth;
                            var cd=document.documentElement.clientWidth;
                            var t=daskCon.offsetHeight;
                            var td=document.documentElement.clientHeight;
                            if(newX>0&&newX<(cd-d)&&newY>0&&newY<(td-t)){       //用if判断是否超出边界
                                daskCon.style.left=newX+'px';
                                daskCon.style.top=newY+'px';
                                }
                            }
        }
        document.onmouseup=function(){     //鼠标松开事件
            isDown=false;     //===值和类型都形同
        }
    }
    function create(){
                var dask=document.createElement("div");
                    dask.id="dask";
                var Width=document.documentElement.scrollWidth;
                var Height=document.documentElement.scrollHeight;
                    dask.style.height=Height+"px";
                    dask.style.width=Width+"px";
                document.body.appendChild(dask);
                var daskCon=document.createElement("div");
                    daskCon.id="dask-con";
                var clientWidth=document.documentElement.clientWidth;
                var clientHeight=document.documentElement.clientHeight;
                    daskCon.innerHTML="<div class='dask-con' id='dask-con'><h1 id='dask-con-tit'>登录</h1><div class='dask-center'><div class='dask-con-l'><form action='#' method='post'><span class='login'><input type='text' placeholder='请输入登录帐号' name='text'><input type='password' placeholder='请输入登录密码' name='password'></span><div class='zidong'><input type='checkbox' name='radio' id='ra'><label for='ra'>自动登录</label><a href='#'>忘记密码</a></div><div class='dd'><a href='#'>立即注册</a><a href='#' class='dd-nav'>登录</a></div></form></div><div class='dask-con-r'><span><h4>一键授权，快速登录</h4><a href='#'>QQ帐号直接登录</a><a href='#' class='dask-tip'>新浪微博帐号登录</a></span></div><div class='close' id='close'>×</div></div></div>";
                   document.body.appendChild(daskCon);
                   var height=daskCon.offsetHeight;
                   var width=daskCon.offsetWidth;
                   daskCon.style.left=(clientWidth-width)/2+"px";
                   daskCon.style.top=(clientHeight-height)/2+"px";
                   var close=document.getElementById("close");
                  dask.onclick=close.onclick=function(){
                     document.body.removeChild(dask);
                    document.body.removeChild(daskCon);
                }
        }
}

