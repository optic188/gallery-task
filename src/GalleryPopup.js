import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import 'antd/dist/antd.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const GalleryePopup = (props) => {
    const {
        isShowLargeImage,
        closeImage,
        desc,
        bigUrl,
        prevClick,
        nextClick,
    } = props;
    return (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {isShowLargeImage && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="close-wrapper">
                            <span onClick={closeImage} className="close">&times;</span>
                        </div>
                        <div>
                            <Icon type="right" style={{
                                fontSize: 34,
                                color: 'blue',
                                position: 'absolute',
                                top: '50%',
                                right: '0',
                                cursor: 'pointer'
                            }}
                                  onClick={nextClick}
                            />
                            <Icon type="left" style={{
                                fontSize: 34,
                                color: 'blue',
                                position: 'absolute',
                                top: '50%',
                                cursor: 'pointer'
                            }}
                                  onClick={prevClick}
                            />
                            <img onClick={closeImage} width="600" height="500"
                                 src={bigUrl} alt="Gallery"/></div>
                        <div className="desc">{desc}</div>
                    </div>
                </div>
            )}
        </ReactCSSTransitionGroup>
    )
};
GalleryePopup.propTypes = {
    isShowLargeImage: PropTypes.bool.isRequired,
    closeImage: PropTypes.func.isRequired,
    desc: PropTypes.string.isRequired,
    bigUrl: PropTypes.string.isRequired,
    prevClick: PropTypes.func.isRequired,
    nextClick: PropTypes.func.isRequired,
};
export default GalleryePopup
