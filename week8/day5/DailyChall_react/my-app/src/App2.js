import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'

class App2 extends React.Component {
    constructor(){
        super()
        this.state = {
            page: 'home'
        }
    }
    render(){
        const {page} = this.state;
        switch(page){
            case 'home':
                return(
                 <Home/>
                )
                 break;
            case 'about':
                default:
                    return(
                    <Home/>
                    )
                    break;
            case 'contact':
                default:
                    return(
                    <Home/>
                    )
                    break;


        return(
            <>
            {

                }
            }
             <Home/>
             <About/>
             <Contact/>
            </>
        )
    }

    }
export default App2;