import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

import './index.css';

class WhoAmI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
        // this.nextYear = this.nextYear.bind(this);    //Первый вариант
        // this.nextYear = () => {                 //Второй вариант
        //     this.setState(state => ({
        //         years: ++state.years
        //     }))
        // }
    }

    nextYear = () => {                 //Третий вариант
        this.setState(state => ({
            years: ++state.years
        }))
    }

    // nextYear() {                                       //Первый вариант
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <React.Fragment>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link}>My profile</a>
            </React.Fragment>
        )
    }
}

// function WhoAmI({name, surname, link}) {
//     return (
//         <React.Fragment>
//             <h1>My name is {name}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </React.Fragment>
//     )
// }

const All = () => {
    return (
        <React.Fragment>
            <WhoAmI name='John' surname='Smith' link='facebook.com' />
            <WhoAmI name='Alex' surname='Shepard' link='vk.com' />
            <WhoAmI name='Gordon' surname='Freeman' link='ok.ru' />
        </React.Fragment>
    )
}

ReactDOM.render(<All/>, document.getElementById('root'));

