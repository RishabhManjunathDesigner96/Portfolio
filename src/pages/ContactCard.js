import React from "react";
import User from '../Image/User.png';
import { Link } from "react-router-dom";


const ContactCard = (props) => {

    const { id, name, email } = props.contact;

    return (
        <div>

            <div className="item_list">

                    <img src={User} className="img_res image" alt="Profile" />

                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <span>
                        <h2 className="header">{name} </h2>
                        <p>{email} </p>
                    </span>
                </Link>
                <div>
                <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                <span className="edit_ico">Edit</span>
                </Link>
                <span className="del_ico" onClick={() => props.clickHandler(id)}>Delete</span>
                </div>
            </div>

        </div>

    )
}

export default ContactCard;
