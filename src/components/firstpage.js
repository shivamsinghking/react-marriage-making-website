import React,{Component} from 'react';
import Images from './images';
import Form from './form';



 class firstpage extends Component {
    render(){
        return (
            <div style={{position:"relative",textAlign:"center"}}>
             <Images />
             <div style={{position:"absolute",top:200/2,left:1400/2,color:"white"}}>
                 <Form />
             </div>
            </div>
          
    
        )
    }
}

export default firstpage;