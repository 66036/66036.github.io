//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="overflow:hidden;background:#fff;position:relative;width:100%;height:100%;z-index:9999999999;"><style>body{overflow:hidden}</style><style>.loadingLogo{animation:bouncedelay 1s infinite ease-in-out both;display:block;width:66px;height:66px;position:absolute;top:50%;margin-top:-33px;left:50%;margin-left:-33px;opacity:.8;}@keyframes bouncedelay{0%{transform:rotate(0deg)}90%,100%{transform:rotate(360deg)}}</style><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgOTYgOTYiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0i5pyq5ZG95ZCN55qE5riQ5Y+YXzE5IiB4MT0iNzQuNTYiIHkxPSI3My40MyIgeDI9Ijc1LjUyIiB5Mj0iMzEuNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkY2RkZGQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OTU3NTciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0i5pyq5ZG95ZCN55qE5riQ5Y+YXzE5LTIiIHgxPSIxOC45MSIgeTE9IjMyLjE2IiB4Mj0iMzAuNCIgeTI9IjcyLjM1IiB4bGluazpocmVmPSIj5pyq5ZG95ZCN55qE5riQ5Y+YXzE5Ii8+PC9kZWZzPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8yLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDIiPjxwYXRoIGQ9Ik02Ni4xLDEuMDlBNi45MSw2LjkxLDAsMCwwLDYyLjM3LDBhNy4xOSw3LjE5LDAsMCwwLTcuMDksNy4yOSw3LjI1LDcuMjUsMCwwLDAsNS41Myw3LjFjMTIuOTEsNS4zLDIzLDE4LjA4LDIzLDMzLjE5LDAsMTYuMDYtMTEuMzUsMzcuNS0yNS41LDQyLjFDNzUuNjQsODcsOTUuMDYsNzEuNDgsOTYsNDcuMjlBNDcuODQsNDcuODQsMCwwLDAsNjYuMSwxLjA5WiIgc3R5bGU9ImZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5hfMTkpIi8+PHBhdGggZD0iTTI5LjksOTQuOTFBNi45MSw2LjkxLDAsMCwwLDMzLjYzLDk2YTcuMzEsNy4zMSwwLDAsMCwxLjU2LTE0LjM5Yy0xMi45MS01LjMtMjMtMTguMDgtMjMtMzMuMTksMC0xNi4wNiwxMS4zNS0zNy41LDI1LjUtNDIuMUMyMC4zNiw5LC45NCwyNC41MiwwLDQ4LjcxQTQ3Ljg0LDQ3Ljg0LDAsMCwwLDI5LjksOTQuOTFaIiBzdHlsZT0iZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmF8xOS0yKSIvPjwvZz48L2c+PC9zdmc+"class="loadingLogo"/></div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
	if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask);
	}
}

//如果被嵌套，则背景透明	
if( top != self ){
	$('#loadingDiv').css({'background':'transparent'});
}
else{
}