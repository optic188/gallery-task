import React from 'react';
import GalleyPopup from './GalleryPopup';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLargeImage: false,
            bigUrl: props.imagesUrls[props.index].big,
            desc: props.imagesUrls[props.index].desc,
        };
        this.curIndex = props.index;
        this.closeImage = this.closeImage.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    closeImage() {
        this.setState(
            {isShowLargeImage: false}
        )
    }

    handleImageClick() {
        this.setState(
            {isShowLargeImage: !this.state.isShowLargeImage}
        )

    }

    prevClick() {
        this.curIndex = --this.curIndex;
        if( this.curIndex < 0) {
            return this.curIndex = 0;
        }

        const newel = this.props.imagesUrls.find((elem, index)=> index === this.curIndex );
        this.setState(Object.assign({},{
            bigUrl: newel.big,
            desc: newel.desc,
        }))
    }

    nextClick() {
        this.curIndex = ++this.curIndex;
        if( this.curIndex > this.props.imagesUrls.length-1) {
            return this.curIndex =  this.props.imagesUrls.length-1;
        }
        const newel = this.props.imagesUrls.find((elem, index)=> index === this.curIndex );
        this.setState({
            bigUrl: newel.big,
            desc: newel.desc,
        })
    }

    render() {
        return (
            <React.Fragment>
                <GalleyPopup
                    isShowLargeImage={this.state.isShowLargeImage}
                    closeImage={this.closeImage}
                    desc={this.state.desc}
                    bigUrl={this.state.bigUrl}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    changeImg={this.state.changeImg}
                />
                <div className="gallery">
                    <img onClick={this.handleImageClick} width="500" height="500" src={this.props.smallUrl}
                         alt="Gallery"/>
                    <div className="desc">{this.props.desc}</div>
                </div>
            </React.Fragment>
        )

    }

}

export default Gallery;
