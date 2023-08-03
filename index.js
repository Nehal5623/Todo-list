function addtolist()
{
    var taskname = document.getElementById('taskname').value;
    var tododiv = document.getElementById('mytodo');

    var newtodolist = document.createElement('div');

    var todoname = document.createElement('li');
    todoname.innerHTML = taskname;
    
    var dltbtn = document.createElement('i');
    dltbtn.classList.add('far');
    dltbtn.classList.add('fa-trash-alt');

    newtodolist.appendChild(todoname);
    newtodolist.appendChild(dltbtn);

    tododiv.appendChild(newtodolist);
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e)
{
    const element = e.target;

    if(element.classList[0]=='far')
    {
        element.parentElement.remove();
    }
}