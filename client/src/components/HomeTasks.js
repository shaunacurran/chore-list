// import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import AddStudent from './AddStudent'

// export default class HomeTasks extends React.Component {

//         constructor(props, context) {
//           super(props, context);
       
//           this.createTasks = this.createTasks.bind(this);
//           this.delete = this.delete.bind(this);
//         }
       
//         createTasks(item) {
//             return <li key={item.key}>{item.text}
//                 <button onClick={(e) => this.delete(item.key, e)}>Done</button>
//                 </li>
//         }

//         delete(key) {
//             this.props.delete(key);
//           }
       

//     render() {
//         var todoEntries = this.props.entries;
//         var listItems = todoEntries.map(this.createTasks);

//         return (
//             <div>
//                 <div>
//                     {/* <Router>
//                     <Link to = "/home">Home</Link> | 
//                     <Link to = "/addmember">Add Member</Link> |
//                     <Link to = "/addtask">Add Task</Link>
//                     </Router> */}
//                 </div>
//                 <div>
//                   <ul>
//                     {/* {this.props.tasks.map((task) => <li>{task}</li>)} */}
//                     {listItems}
//                 </ul>  
//                 </div>
                
//             </div>
//         );
//     }
// };

// // router.get('/tasks', function(req, res){
// //     db.tasks.find({}, function(err, doc){
// //         if(err){
// //             res.send(err);
// //         }
// //         res.json(doc);
// //     });
// // });

// // router.delete('/tasks/:id', function(req, res){
// //     db.tasks.findByIdAndRemove({_id: req.params.id}, function(err, doc){
// //         if(err){
// //             res.send(err);
// //         }
// //         res.json(doc);
// //     });
// // });