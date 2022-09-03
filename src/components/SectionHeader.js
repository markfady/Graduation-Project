import React,{Fragment} from 'react';
import './SectionHeader.css'
function SectionHeader(props){
    return(
        <Fragment>
            <div className='text'>
                <div className='box-title'>
                    <p className='first-title'>{props.smallTitle}</p>
                    <h2 className='second-title'>{props.bigTitle}</h2>
                    <span className="underline"></span>
                </div>
                <p>{props.description}</p>
            </div>
        </Fragment>
    )
}
export default SectionHeader