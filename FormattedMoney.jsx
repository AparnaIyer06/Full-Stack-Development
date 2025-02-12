// //Class Component 
// import React from 'react'
// class FormattedMoney extends React.Component{

//     constructor(props){   //Props: Properties- sent from one component to another 
//         //Props: Implicit object of the class
//         super(props) //Call parent class constructor
//     }
//     format(amount){
//         return parseFloat(amount).toFixed(2)  //Truncate to 2 decimal places
//     }
    
//     render(){  //To display on the web-page

//         return(
//             <span>
//                 {this.format(this.props.value)}
//             </span>
//         )
//     }

// }

// export default FormattedMoney