import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 35
//     }
//     this.nextYear = this.nextYear.bind(this);
//       //   // this.nextYear = () => {
//       //   //   this.setState(state => ({
//       //   //     years: ++this.state.years
//       //   //   }))
//       //   // }
    
//   }
//   //   state = {
//   //     years: 35
//   //   }
//   // nextYear = () {
//   //   // console.log(1);
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }
//   render () {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return(
//       <>
//       <button onClick={this.nextYear}>++</button>
//       <h1>My name is {name}, surname - {surname}, years = {years}  </h1>
//       <a href={link}>My profile</a>
  
//       </>
       
//     )
//   }


// // function WhoAmI({name, surname, link}) {
// //   return(
// //     <>
// //     <h1>My name is {name}, surname - {surname}  </h1>
// //     <a href={link}>My profile</a>

// //     </>
     
// //   )
// // }
// }
// const All = () => {
//   return (
//     <>
//       <WhoAmI name='Mark' surname='Zukerberg' link='tut.by'/>
//       <WhoAmI name='Ivan' surname='Petrov' link='tut.by'/>
//       <WhoAmI name='Joko' surname='Ono' link='tut.by'/>
//     </>
//   )
// }
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

 