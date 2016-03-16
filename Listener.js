(function(){
    var q = {},
        topics = {};
    //监听事件
    q.on = function(topic,func) {
        topics[topic] = topics[topic] || [];
        topics[topic].push({
            func : func
        });
    };
    //取消监听事件
    q.off =function(topic){
    	if(topics[topic]) {
    		delete topics[topic];
    	}
    };
    //触发监听事件
    q.trigger = function(topic,args) {
        if(!topics[topic]) {return;}
        var subs = topics[topic],
            len = subs.length;
        while(len--) {
            subs[len].func(args);
        }
        return this;
    };
    window.Listener = window.Listener || q;
})();
