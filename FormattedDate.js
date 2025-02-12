//Class Component 
import React from 'react'
class FormattedDate extends React.Component{

    constructor(props){   //Props: Properties- sent from one component to another 
        //Props: Implicit object of the class
        super(props) //Call parent class constructor
    }
    format(val){
        const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] //Indexing starts from 0
        let parsed_date = new Date(Date.parse(val)) 
        let formatted_date = parsed_date.getDate()+"-"+months[parsed_date.getMonth()]+"-"+parsed_date.getFullYear()
        //months converts the index to the corresponding month in the list- months
        return formatted_date //Return value
    }
    
    render(){  //To display on the web-page

        return(
            <span>
                {this.format(this.props.value)}
            </span>
        )
    }

}

export default FormattedDate