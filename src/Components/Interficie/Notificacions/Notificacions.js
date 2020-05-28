import React from 'react';
import FadeIn from 'react-fade-in';
import CardNoti from './CardNoti'
class Notificacions extends React.Component{
    render(){
        return(
            <FadeIn>
<CardNoti/>
<CardNoti/>
<CardNoti/>
<CardNoti/>

            </FadeIn>
        ) 
    }
}

export default Notificacions;