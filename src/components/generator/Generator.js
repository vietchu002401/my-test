import React, { useEffect, useState } from 'react';
import "./generator.scss"
import ColorModal from '../color-modal/ColorModal';
import { useDispatch, useSelector } from 'react-redux';
import { addStyleAction, changeStylesAction, removeStylesActon } from '../../store/actions/actions';

const Generator = () => {
    let [right, setRight] = useState("0")
    let [down, setDown] = useState("0")
    let [blur, setBlur] = useState("5")
    let [opa, setOpa] = useState("20")

    let [color, setColor] = useState({
        r: 0,
        g: 0,
        b: 0
    })

    let styleState = useSelector(state => state.stylesReducer)
    let dispatch = useDispatch()
    let dispatchAddStyle = () => dispatch(addStyleAction())
    let dispatchChangeStyle = (index, item) => dispatch(changeStylesAction(index, item))

    let [index, setIndex] = useState(0)

    useEffect(() => {
        let current = styleState[index]
        if (!current) {
            setIndex(0)
            return
        }
        setRight(current.right)
        setDown(current.down)
        setBlur(current.blur)
        setOpa(current.a)
        setColor({
            r: current.r,
            g: current.g,
            b: current.b
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    let changeStyle = (color) => {
        dispatchChangeStyle(index, { r: color.r, g: color.g, b: color.b, a: opa, right: right, down: down, blur: blur })
    }

    let changeColor = (newColor) => {
        setColor(newColor)
        changeStyle(newColor)
    }

    let changeIndex = (index) => {
        setIndex(index)
    }

    return (
        <div className='generator'>
            <h2>Text-Shadow CSS Generator</h2>
            <div className='generator__controller'>
                <div className='generator__controller__input'>
                    <span>Shift right</span>
                    <input onChange={(e) => {setRight(e.target.value); changeStyle(color)}} value={right} type="range" min="-50" max="50" />
                </div>
                <div className='generator__controller__input'>
                    <span>Shift down</span>
                    <input onChange={(e) => { setDown(e.target.value); changeStyle(color) }} value={down} type="range" min="-50" max="50" />
                </div>
                <div className='generator__controller__input'>
                    <span>Blur</span>
                    <input onChange={(e) => { setBlur(e.target.value); changeStyle(color) }} value={blur} type="range" min="0" max="100" />
                </div>
                <div className='generator__controller__input'>
                    <span>Opacity</span>
                    <input onChange={(e) => { setOpa(Number(e.target.value)); changeStyle(color) }} value={opa} type="range" min="0" max="100" />
                </div>
                <ColorModal changeColor={changeColor} originalColor={color} />
            </div>
            <div className='generator__layer'>
                <button onClick={dispatchAddStyle} className='btn'>Add layer</button>
                <div className='color-layer'>
                    {styleState.map((item, number) => {
                        return <div key={Math.random()} className={number === index ? "active" : null} onClick={() => changeIndex(number)}><Field changeIndex={changeIndex} right={item.right} down={item.down} blur={item.blur} a={item.a} r={item.r} g={item.g} b={item.b} index={number} /></div>
                    })}
                </div>
            </div>
        </div>
    );
};

let Field = (props) => {
    let { right, down, blur, a, r, g, b, index, changeIndex } = props
    let dispatch = useDispatch()
    let dispatchRemoveStyles = (index) => dispatch(removeStylesActon(index))

    let removeStyles = () => {
        changeIndex(0)
        dispatchRemoveStyles(index)
    }
    return (
        <div className='layer-field'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </span>
            {`rgb(${r},${g},${b},${a / 100}) ${right}px ${down}px ${blur}px`}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon-control bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
            <svg onClick={removeStyles} xmlns="http://www.w3.org/2000/svg" style={{ right: "3px" }} width="20" height="20" fill="currentColor" className="icon-control bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
        </div>
    )
}

export default Generator;