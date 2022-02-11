import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import "./colorModal.scss"
const ColorModal = (props) => {
    let { originalColor } = props

    let [colorIsOpen, setColorIsOpen] = useState(false)
    let [textColor, setTextColor] = useState({
        r : 0,
        g : 0,
        b : 0,
        a : 1
    })

    useEffect(()=>{
        setTextColor(originalColor)
    },[originalColor])

    let handleChangeComplete = (color) => {
        setTextColor(color.rgb)
        props.changeColor(color.rgb)
    }

    let openColorController = () => {
        setColorIsOpen(true)
    }

    let closeColorController = () => {
        setColorIsOpen(false)
    }
    return (
        <div className='color-modal'>
            <div onClick={openColorController} className='modal__controller__color'>
                <div className='bgr' style={textColor && { backgroundColor: `rgb(${textColor.r},${textColor.g},${textColor.b})` }}></div>
                {colorIsOpen &&
                    <div className='modal__controller__color__change'>
                        <SketchPicker
                            color={textColor}
                            onChangeComplete={handleChangeComplete}
                        />
                    </div>}
            </div>
            {colorIsOpen && <div onClick={closeColorController} className='overlay'></div>}
        </div>
    );
};

export default ColorModal;