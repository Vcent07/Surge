let cache = $persistentStore.read("body")
let body = document.getElementsByTagName('body')[0].innerText
  
if(!cache){
    $persistentStore.write(body, "body");
}else{
    if(body == cache ){
        console.log('û�б仯');
    }else{
        console.log('�б仯��');
        $notification.post('��ص���վ�б仯��', '', $script.name);
    }
}