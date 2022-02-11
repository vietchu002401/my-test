import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColorModal from '../color-modal/ColorModal';
import "./preview.scss"
const Preview = () => {
    let [textColor, setTextColor] = useState({r : 61, g: 157, b : 246})
    let [bgr, setBgr] = useState({r : 255, g : 255, b: 255})

    let stylesState = useSelector(state => state.stylesReducer)
    let [shadow, setShadow] = useState("rgba(0,0,0,0)")

    useEffect(()=>{
        let styles = stylesState.map((item)=>{
            return `rgba(${item.r},${item.g},${item.b},${item.a/100}) ${item.right}px ${item.down}px ${item.blur}px`
        })
        setShadow(styles.join(", "))
    },[stylesState])

    let changeBackground = (color)=>{
        setBgr(color)
    }

    let changeTextColor = (color)=>{
        setTextColor(color)
    }
    return (
        <div className='preview'>
            <div className='preview__color'>
                <h2>Preview</h2>
                <div style={{display : "flex"}}>
                    <ColorModal changeColor={changeBackground} originalColor={bgr}/>
                    <ColorModal changeColor={changeTextColor} originalColor={textColor}/>
                </div>
            </div>
            <div style={{backgroundColor : `rgb(${bgr.r},${bgr.g},${bgr.b})`}} className='preview-show'>
                <div style={{color : `rgb(${textColor.r},${textColor.g},${textColor.b})`, textShadow : shadow }} className='text'>
                    Hello SC
                </div>
            </div>
        </div>
    );
};

export default Preview;