// 引入mitt
import mitt from 'mitt'

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()

//绑定事件
// emitter.on('test1',()=>{
//   console.log('test1被调用');
  
// })
// emitter.on('test2',()=>{
//   console.log('test2被调用');
  
// })

// //触发事件
// setInterval(() => {
//   emitter.emit('test1')
//   emitter.emit('test2')
// }, 1000);

// setTimeout(() => {
//   emitter.all.clear()
// }, 3000);

// 暴露emitter
export default emitter