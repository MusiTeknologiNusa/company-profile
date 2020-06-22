import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = (props) => {
    return (
        <div className={`w-full flex flex-col justify-center items-center mt-8`}>
            <img width={props.width} height={props.height} src={props.image}/>
            <div className="text-primary font-bold text-xl">{props.label}</div>
        </div>
    );
};

ServiceCard.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    label: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
          PropTypes.string, // to handle url based image
          PropTypes.object // to handle object based image
    ])
};

export default ServiceCard;