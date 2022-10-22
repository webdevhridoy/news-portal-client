import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";



const NewsCard = ({ news }) => {
    const { _id, author, details, title, image_url, total_view, rating } = news;
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Header>
                        <div className='d-flex justify-content-between align-items-center gap-2'>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                                <div>
                                    <img className='custom-author' src={author.img} alt="" />
                                </div>
                                <div>
                                    <p className='m-0'>{author.name}</p>
                                    <p className='m-0'>{author.published_date}</p>
                                </div>
                            </div>
                            <div>
                                <span className='mx-1'><FaRegBookmark></FaRegBookmark></span>
                                <span className='mx-1'><FaShareAlt></FaShareAlt></span>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details.length > 200 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>

                                :
                                <p>{details}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <small className='me-2 text-warning'><FaStar></FaStar></small>
                                <small className="text-muted">{rating.number}</small>
                            </div>
                            <div>
                                <small className='me-2'><FaRegEye></FaRegEye></small>
                                <small className="text-muted">{total_view}</small>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCard;