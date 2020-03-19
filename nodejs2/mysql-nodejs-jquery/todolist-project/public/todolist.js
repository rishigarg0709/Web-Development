$(function(){
    let mytask=$('#mytask')
    let addtaskbtn=$('#addtask')
    let todolist=$('#todolist')
    let deltaskbtn=$('#deletetask')

    function refresh_task(data){
        todolist.empty()
        for (item of data)
        {
            todolist.append('<li>' + item.name + '</li>')
        }
    }
    

    $.get('/api/task',function(data){
        refresh_task(data)
    })

    addtaskbtn.click(function(){
        let newtodo=mytask.val()
        $.post('/api/task',
        {
            name:newtodo, 
        },
        function(data){
            refresh_task(data)
        })
    })

    deltaskbtn.click(function(){
        console.log()
    })


})