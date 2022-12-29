
const socket = io().connect()

    let form = document.getElementById('form')
    let input = document.getElementById('input')
    
        const render = (data) => {
          let div = document.getElementById('messagesContainer')
          let html = data.map(
            (el) => `<div>
          <strong>${el.type}</strong> | ${el.body}
          </div>`
          );
          div.innerHTML = html
        }

    form.addEventListener('submit', function(e) {
      e.preventDefault()
      if(input.value){
        socket.emit('message', input.value)
        input.value = ''
      }
    })
    

    socket.on('allMessages', data => {
      // console.log(data.messages)
      render(data.messages)
    })