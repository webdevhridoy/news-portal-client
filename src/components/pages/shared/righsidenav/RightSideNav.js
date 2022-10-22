import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const RightSideNav = () => {
    const { signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogle} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Continue with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Continue with Github</Button>
            </ButtonGroup>

            <div className='mt-2'>
                <h5>Find us on</h5>
                <div>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;