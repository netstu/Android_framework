F._setMod("xcard");F._fileMap({"/js/xmancard_a70456df.js":["config","base/conf","base/card","base/view","base/common"],"/css/xmancard_810472f8.css":["xmancard.css","tip.css"]});F._useConfig=true;F._firstScreenJS=F._firstScreenJS||[];F._firstScreenJS.push("/js/xmancard_a70456df.js");F.module("xcard:base/conf",function(c,b,a){b.conf={11:{type:"inner",init:"xcard:gaokao/start/init"}}});F.module("xcard:base/card",function(d,f,k){var a=d("xcard:base/view");var h=d("xcard:base/conf").conf,i=$("head");var c=function(l){$("#s_content_"+l)[0].innerHTML=a.render(l)};var g={};var b=function(o){if(h[o]&&h[o].type=="inner"&&h[o].init){var l=h[o].init.split("/");var n=l[0]+"/"+l[1],m=l[2];F.use(n,function(p){p[m]({id:o,$mod:$("#s_xmancard_"+o)})})}else{}};var e=function(n,l){var m="/home/xman/data/xcardhtml?cardid="+n;$.ajaxget(m,function(o){l&&l(o)})};var j=function(m){var m,l;if(h[m]&&h[m].type=="inner"&&h[m].init){c(m);b(m);return}if(window._card_sync==1&&m==s_session.firstmod){g[m]=true}param={};if($.isEmptyObject(param)){param=""}else{param="&"+$.param(param)}if(!g[m]){c(m);g[m]=true;e(m+param,function(q){var o,p=/<link[^>]*href="(.*?)"[^>]*>/,n;if(q.html){o=q.html.match(p);if(o){n=o[1];$('<link rel="stylesheet" type="text/css" href="'+n+'" />').on("load",function(){$("#s_content_"+m).html(q.html.replace(p,""));k.fire("tabshow",{cardid:m});$(window).trigger("cardrender")}).appendTo(i);if($.browser.safari&&window.navigator.platform==="Win32"){setTimeout(function(){$("#s_content_"+m).html(q.html.replace(p,""));k.fire("tabshow",{cardid:m});$(window).trigger("cardrender")},300)}}else{$("#s_content_"+m).html(q.html);$(window).trigger("cardrender")}}})}else{k.fire("tabshow",{cardid:m})}};f.init=j});F.module("xcard:base/view",function(f,d,b){var e=f("xcard:base/conf").conf;var g=function(i){return h(i)},c=!!s_session.sample_value,a=c?['<div class="s-content-load s-opacity-white-background">','<img src="'+s_domain.staticUrl+'static/superplus/img/loading.gif?v=29361627.gif" />',"<div>加载中，精彩马上呈现</div>","</div>"].join(""):"";var h=function(i){return'<div id="s_xmancard_'+i+'" class="s-xmancard-'+i+' s-xmancard">'+a+"</div>"};d.render=g});F.module("xcard:base/common",function(c,i,p){var k={},f={},a="/home/xman/submit/",o="/home/xman/data/",g="";var l={refreshtip:'<div id="s_refresh_tip" style=";height:30px;border:1px solid #ac8970;background:#fffbe6;padding:3px 30px 3px 36px;color:#8c1a08;vertical-align:middle;font-size:14px;line-height:30px;z-index:9999;position:absolute;top:141px;left:340px;"><em class="right-tag" style="width:15px;height:15px;position:absolute;left:20px;top:10px;background:#{url}"></em><p style="padding-left:5px">刷新成功</p></div>'};var b=$.formatString(l.refreshtip,{url:"url("+s_domain.staticUrl+"static/xcard/img/base/stock"+($.isIE6?8:24)+".png?v=md5) -55px -11px"});var e=function(u,v,w,r,t){k[u]=k[u]||{};if(k[u].key==w){return}if(typeof(w)!="string"){w=$.stringify(w)}var s={tpl:u,key:v,value:w,cmd:"set"};if(!$.isEmptyObject(t)){s=$.extend(s,t)}$.ajaxpost(a+"xcardstore",s,function(x){k[u].key=w;r&&r(x.errNo)})};var j=function(s,v,r){g=$("#s_xmancard_"+s).attr("data-curtab");var u=$("#s_xmancard_"+s).attr("data-curtab",v);e(s,"curTab",v,function(){r&&r()});n(s,v)};var h=function(s,t,r){return $.ajaxpost(o+"xcardgetstore",{tpl:s,key:t},function(u){r&&r(u)})};var d=function(s,t,u,r){if(typeof(u)!="string"){u=$.stringify(u)}$.ajaxpost(a+"xcardstore",{tpl:s,key:t,value:u,cmd:"add"},function(v){r&&r(v.errNo)})};var m=function(s,t,u,r){if(typeof(u)!="string"){u=$.stringify(u)}$.ajaxpost(a+"xcardstore",{tpl:s,key:t,value:u,cmd:"del"},function(v){r&&r(v.errNo)})};var n=function(r,s){if($.trim(g)!=$.trim(s)){var t=$("#s_xmancard_"+r).parent().attr("data-id")||s_session.curmod;p.fire("tabshow",{cardid:t,cardname:r,cardtab:s})}};var q=function(s,x,u,r){if(s=="undefined"||s==""){return}var w=$("#s_xmancard_"+s);var t=w.parent(),v=t.attr("data-id");if(v){var y=$.url.jsonToQuery(u||{});$.ajaxget(o+"xcardhtml?cardid="+v+"&"+y,function(z){if(z.errNo==0){$(window).trigger("cardrender");if($.isFunction(r)){r(z)}else{w.remove();t.hide().html(z.html).show()}if(!x){t.append(b);clearTimeout(A);var A=setTimeout(function(){$("#s_refresh_tip").css("display","none")},2000)}}})}};i.refreshCard=q;i.pushStore=d;i.getStore=h;i.delStore=m;i.setCardTab=j;i.setStore=e});