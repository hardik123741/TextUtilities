import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState("");
    const addchange = (event) => {

        setText(event.target.value);

    };

    const addupperclick = () => {

        let text1 = text.toUpperCase();
        setText(text1);
        props.addalert("danger", "You Have  Converted into UpperCase");
    };
    const addlowerclick = () => {

        let text1 = text.toLocaleLowerCase();
        setText(text1);
        props.addalert("danger", "You Have  Converted into LowerCase");
    };

    const addreplace = () => {

        let text1 = text.replaceAll("a", "A");

        setText(text1);
        props.addalert("danger", "You Have  SuccessFully Replaced a with A");
    };
    const clear = () => {

        setText("");
        props.addalert("danger", "You Have  SucessFully Cleared ");
    };
    return (
        <>

            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="mb-3">
                    <h1 className="Heading">{props.title}</h1>
                    <textarea className="form-control" value={text} onChange={addchange} id="exampleFormControlTextarea1" rows="9" placeholder='Enter Here' style={{ backgroundColor: props.mode === 'dark' ? '#c5ccd4' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }}></textarea>

                </div>
                <div className="mb3">
                    <button className='btn btn-outline-warning mx-2 my-2' onClick={addupperclick}> Click To Convert UpperCase</button>
                    <button className='btn btn-outline-info mx-2 my-2' onClick={addlowerclick}> Click To Convert LowerCase</button>
                    <button className='btn btn-outline-secondary mx-2 my-2' onClick={addreplace}> Click To Replace A</button>
                    <button className='btn btn-outline-primary mx-2 my-2' onClick={clear}>Clear</button>

                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Summery</h2>

                <p>Total Word is <b> {text === "" ? text.split(/\s+/).length = 0 : text.trim().split(/\s+/).length} </b>And  Total Character is <b> {text.length} </b> </p>

                <h6>Average Time To Read Full Article is {0.008 *(text===""?0: text.trim().split(/\s+/).length) } Minutes </h6>

               
                <h4 >Preview</h4>
                <p>{text.length > 0 ? text : 'Enter Something to Above Text box To Preview'}</p>

            </div>
        </>
    )
}

TextForm.propTypes = {

    title: PropTypes.string
};