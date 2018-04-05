import React, {Component} from 'react';
import './App.css';
import Gallery from './Gallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
    imagesUrls = [
        {
            small: 'https://dummyimage.com/400x400/54dede/000',
            big: 'https://dummyimage.com/600x500/54dede/000',
            desc: 'image desc 1',
        },
        {
            small: 'https://dummyimage.com/400x400/c5d4d4/000',
            big: 'https://dummyimage.com/600x500/c5d4d4/000',
            desc: 'image desc 2',
        },
        {
            small: 'https://dummyimage.com/400x400/54dede/000',
            big: 'https://dummyimage.com/600x500/54dede/000',
            desc: 'image desc 3',
        },
        {
            small: 'https://dummyimage.com/400x400/c5d4d4/000',
            big: 'https://dummyimage.com/600x500/c5d4d4/000',
            desc: 'image desc 4',
        },

    ];

    render() {
        return (
            <div className="App">
                {this.imagesUrls.map((elem, index) => {
                    return (
                            <Gallery
                                key={index}
                                imagesUrls={this.imagesUrls}
                                index={index}
                                smallUrl={elem.small}
                                bigUrl={elem.big}
                                desc={elem.desc}/>
                    )
                })
                }
            </div>
        );
    }
}

export default App;
