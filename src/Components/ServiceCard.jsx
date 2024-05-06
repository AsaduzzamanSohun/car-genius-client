import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const {_id, img, title, price} = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>$ {price}</p>
                <Link to={`checkout/${_id}`} className="btn btn-primary">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}