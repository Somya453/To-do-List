function newElement() {
    const todoname=document.getElementById('todo');
    const  todoValue=todoname.value;
    var t=document.createTextNode(todoValue);
    var li=document.createElement('li');
    t.appendChild( li=document.createElement('li'));
    li.appendChild(t);
    const list=document.getElementById('list');
    list.appendChild(li);
    todoname.value='';

    //console.log(todoValue);
    

    todoname.value='';
    var span=document.createElement('span');
    var text=document.createTextNode('x');
    span.className='close';
    span.appendChild(text);
    t.appendChild(span);
    }