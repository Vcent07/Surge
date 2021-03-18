let cache = $persistentStore.read("body")
let body = document.getElementsByTagName('body')[0].innerText
  
if(!cache){
    $persistentStore.write(body, "body");
}else{
    if(body == cache ){
        console.log('没有变化');
    }else{
        console.log('有变化了');
        $notification.post('监控的网站有变化了', '', $script.name);
    }
}