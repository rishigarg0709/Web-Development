$(function(){
    let mytask=$('#mytask')
    let addtaskbtn=$('#addtask')
    let todolist=$('#todolist')
    let radioValue = $('input:radio[name=done]:checked')

    addtaskbtn.click(function(){
        let newtodo=mytask.val()
        let newdone=radioValue.val()
        $.post('/routes',
        {
            name:newtodo,
            done:newdone  
        },
        function(data){
            todolist.empty()
            for (item of data)
            {
                todolist.append('<li>' + item.name + " " + item.done + '</li>')
            }
        })
    })
    

})