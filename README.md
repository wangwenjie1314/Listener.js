# Listener.js
监听触发模式 有效解决模块之间通信

## How Use

```javascript
//定义监听主题为say，然后给say定义事件
Listener.subscribe('say',function(d){
	console.log(d);
});

//触发监听主题say
Listener.publish('say','Hello World');
Listener.publish('say','Hello World Too !');
```
