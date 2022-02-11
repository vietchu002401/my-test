import React from 'react';
import { useSelector } from 'react-redux';
import Generator from '../../generator/Generator';
import Preview from '../../preview/Preview';
import "./textShadowPage.scss"

const TextShadow = () => {
    return (
        <div className='text-shadow-page'>
            <Generator />
            <div className='text-shadow-page__right'>
                <Preview />
                <CodeValue />
                <div className='code-value'>
                    <h2>Templates</h2>
                </div>
            </div>
        </div>
    );
};

const CodeValue = () => {
    let stylesState = useSelector(state => state.stylesReducer)
    return (
        <div className='code-value'>
            <h2>CSS Code</h2>
            <span>text-shadow: </span>
            {stylesState.map((item, index)=>{
                return <span key={index}>{`rgba(${item.r},${item.g},${item.b},${item.a/100}) ${item.right}px ${item.down}px ${item.blur}px${index === stylesState.length - 1 ? ";" : ", "}`}</span>
            })}
        </div>
    );
};

export default TextShadow;