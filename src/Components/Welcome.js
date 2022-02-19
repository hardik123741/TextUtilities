import React from 'react'
import html from "./html5.png";
import java from "./java.png";
import js from "./javascript.png";
import reactpic from "./react.png";
import spring from "./spring.png";
import mysql from "./mysql.png";

export default function Welcome(props) {
    return (
        <>
            <div className="row">
            
                <div className="col my-5" style={{textAlign:'center'}}>
                  <h1 style={{color:props.mode==="light"?"black":"white"}}>Modern days Technologies </h1>
                </div>

            </div>
            <hr style={{color:props.mode==="light"?"black":"white"}} />
            <div className="row">
                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">

                        <div className="card h-100">
                            <img src={html} className="card-img-top" alt="PIC" />
                            <div className="card-body">
                                <h5 className="card-title">HTML(Hyper Text Markup Language )</h5>
                                <p className="card-text">The HyperText Markup Language, or HTML is the standard markup language for documents designed
                                    to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">

                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">
                        <div className="card h-100">
                            <img src={js} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">JavaScript</h5>
                                <p className="card-text">JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites
                                    use JavaScript on the client side for web page behavior, often incorporating third-party libraries</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">
                        <div className="card h-100">
                            <img src={reactpic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">React is a free and open-source front-end JavaScript library for building user
                                    interfaces based on UI components. It is maintained by Meta and a community of individual developers and
                                    companies. React can be used as a base in the development of single-page or mobile applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">

                        <div className="card h-100">
                            <img src={java} className="card-img-top" alt="PIC" />
                            <div className="card-body">
                                <h5 className="card-title">Java</h5>
                                <p className="card-text">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">

                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">
                        <div className="card h-100">
                            <img src={spring} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Spring</h5>
                                <p className="card-text">The Spring Framework is an application framework and inversion of control container for the Java platform.
                                    The framework's core features can be used by any Java application,
                                    but there are extensions for building web applications on top of the Java EE platform.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-body rounded my-5">
                        <div className="card h-100">
                            <img src={mysql} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MySql</h5>
                                <p className="card-text">MySQL is an open-source relational database management system. Its name is a combination of "My",
                                    the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

