import React from 'react';
import {Icon} from 'antd';
import 'antd/dist/antd.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class GalleryPopup extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.props.isShowLargeImage &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="close-wrapper"><span onClick={this.props.closeImage}
                                                             className="close">&times;</span></div>
                                <div>
                                    <Icon type="right" style={{
                                        fontSize: 34,
                                        color: 'blue',
                                        position: 'absolute',
                                        top: '50%',
                                        right: '0',
                                        cursor: 'pointer'
                                    }}
                                          onClick={this.props.nextClick}
                                    />
                                    <Icon type="left" style={{
                                        fontSize: 34,
                                        color: 'blue',
                                        position: 'absolute',
                                        top: '50%',
                                        cursor: 'pointer'
                                    }}
                                          onClick={this.props.prevClick}
                                    />
                                    <img onClick={this.handleImageClick} width="600" height="500"
                                         src={this.props.bigUrl} alt="Gallery"/></div>
                                    < div className="desc">{this.props.desc}</div>
                    </div>
                </div>
                }
            </ReactCSSTransitionGroup>

        )

    }

}

export default GalleryPopup
