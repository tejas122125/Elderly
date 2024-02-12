import * as WebSocket from 'ws';
import io from 'socket.io-client';
const Helper = () => { 
  
  const socket = io('http://localhost:3000');
  socket.on('message',(message)=>{
  const dataobj  = JSON.parse(message.tostring())
  console.log(dataobj)
  })

  return (
    <div>Helper
 
    </div>
  )
}

export default Helper