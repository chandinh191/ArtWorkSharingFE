import React, { useEffect, useState } from 'react';
import img_avatar from '../../assets/img/avatar.jpg';
import img_product from '../../assets/img/product/details/product-2.jpg';
import axios from 'axios';
import appsetting from '../../appsetting.json';
import { useLocation } from 'react-router-dom';
const { SERVER_API } = appsetting;

function ProductDetail() {
    const token = localStorage.getItem('token');
    const useridlocal = localStorage.getItem('userid');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [artwork, setArtwork] = useState([]);
    const [artist, setArtist] = useState({});
    const [audience, setAudience] = useState({});

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const res = await fetch(`${SERVER_API}/ArtWork/GetById?id=${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.ok) {
                    const resData = await res.json(); // Extract JSON data from response
                    setArtwork(resData);
                    fetchArtist(resData.userAccountId);
                    fetchAudience(resData.userOwnerId);
                    getCategoryById(resData.categoryId);
                } else {
                    console.error('Failed to fetch artwork');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchArtwork();
    }, [id]);

    const fetchArtist = async (id) => {
        try {
            const res = await fetch(`${SERVER_API}/Auth/GetArtistById?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                const resData = await res.json(); // Extract JSON data from response
                setArtist(resData);
            } else {
                console.error('Failed to fetch artist');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchAudience = async (id) => {
        try {
            const res = await fetch(`${SERVER_API}/Auth/GetAudienceById?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                const resData = await res.json(); // Extract JSON data from response
                setAudience(resData);
            } else {
                console.error('Failed to fetch audience');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    /* Lấy user  */
    const userid = useridlocal;

    // add wishlist
    const userId = localStorage.getItem('userid');
    const artWork = id;
    const [isInWishlist, setIsInWishlist] = React.useState(false);
    const [wishlistId, setWishlistId] = React.useState(false);

    // get all wishlist
    useEffect(() => {
        getWishList();
    }, [artWork, userId]); // getWishList will be called when `artWork` or `userId` changes

    async function getWishList() {
        const res = await fetch(`${SERVER_API}/WishList/GetAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            const json = await res.json();
            // Check if the current artwork is in the wishlist and is not deleted
            setIsInWishlist(
                json.some(
                    (item) => item.userAccountId === userId && item.artWorkID === artWork && item.isDeleted === false,
                ),
            );
            const wishlistItem = json.find(
                (item) => item.userAccountId === userId && item.artWorkID === artWork && item.isDeleted === false,
            );
            if (wishlistItem) {
                // If found, set isInWishlist to true and set the wishlistId
                setIsInWishlist(true);
                setWishlistId(wishlistItem.id); // Assuming the id property is the wishlistId
            } else {
                // If not found, set isInWishlist to false and clear the wishlistId
                setIsInWishlist(false);
                setWishlistId(null);
            }
        } else {
            // Handle error
        }
    }

    // delete wishlist category
    async function deleteWishList() {
        const res = await fetch(`${SERVER_API}/WishList/Delete?id=` + wishlistId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            window.location.reload();
        } else {
            // Handle error
        }
    }

    // add wishlist category
    async function addWishList() {
        const res = await fetch(`${SERVER_API}/WishList/Add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                userAccountId: userId,
                artWorkID: artWork,
            }),
        });
        if (res.ok) {
            window.location.reload();
        } else {
        }
    }

    async function AddOrder() {
        const res = await fetch(`${SERVER_API}/Order/Add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                BuyerAccountId: userid,
                OwnerAccountId: audience.id,
                artWorkID: artwork.id,
                status: 1,
            }),
        });
        if (res.ok) {
            window.location.reload();
        } else {
            window.location.reload();
        }
    }

    //Comment--------------
    const [allComments, setAllComments] = useState([]);
    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/Interact/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setAllComments(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);
    const comments = allComments.filter((comment) => comment.artWorkID === artwork.id);

    const [commentAccountNames, setCommentAccountNames] = useState([]);
    useEffect(() => {
        const fetchNames = async () => {
            const names = [];
            for (let comment of comments) {
                const response = await fetch(`${SERVER_API}/Auth/GetAccountById?id=${comment.userAccountId}`);
                const data = await response.json();
                names.push(data.userName);
            }
            setCommentAccountNames(names);
        };
        fetchNames();
    }, [comments]);

    const [review, setReview] = useState('');

    const handleCommentChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(review);
        await AddComment(review);
    };

    async function AddComment(review) {
        const res = await fetch(`${SERVER_API}/Interact/Add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                artWorkID: artwork.id,
                userAccountId: userId,
                comment: review,
            }),
        });
        if (res.ok) {
            window.location.reload();
        } else {
            window.location.reload();
        }
    }

    /* Popup */
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    /* CheckOrder */
    const [checkOrder, setCheckOrder] = useState(false);
    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/Order/GetAll`)
            .then((response) => {
                // Kiểm tra xem đơn hàng tồn tại hay không
                const existingOrder = response.data.find(
                    (order) => order.buyerAccountId === userid && order.artWorkID === artwork.id && order.status === 1,
                );
                if (existingOrder) {
                    setCheckOrder(true);
                }
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, [userid, artwork.id]);

    // category name
    const [categoryName, setCategoryName] = React.useState('');

    async function getCategoryById(categoryId) {
        const res = await fetch(`${SERVER_API}/Category/GetById?id=${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            const json = await res.json();
            setCategoryName(json.categoryName); // Assuming the name property is the category name
        } else {
            console.error('Failed to fetch category');
        }
    }

    return (
        <>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <a href="#">ArtWork </a>
                                <span>Detail Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row" style={{ padding: '50px' }}>
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                {/* <img src={img_product} alt="" /> */}
                                <img src={artwork.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{artwork.name}</h3>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>( ~~ reviews )</span>
                                </div>
                                <div className="product__details__price">
                                    $ {artwork.price} {/*<span>$ 83.0</span> */}
                                </div>
                                <p>{artwork.description}</p>
                                <div className="product__details__button">
                                    {isOpen && (
                                        <div className="popup-container">
                                            <div className="popup-content">
                                                <h4>Are you sure you want to order this product ?</h4>
                                                <p>
                                                    The order will be sent and await confirmation from the product's
                                                    current owner.
                                                </p>

                                                <button className="site-btn btn" onClick={togglePopup}>
                                                    Cancel
                                                </button>
                                                <button className="primary-btn btn" onClick={AddOrder}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {artwork.artWorkStatus === 2 ? ( // If the artwork is sold
                                        <button className="cart-btn2">Stop selling</button>
                                    ) : checkOrder === false ? ( // If checkOrder is false
                                        <a href="#" className="cart-btn" onClick={togglePopup}>
                                            <span className="icon_bag_alt" /> Order Now
                                        </a>
                                    ) : (
                                        // If checkOrder is true
                                        <a href="#" className="cart-btn2">
                                            <span className="icon_bag_alt" /> Ordered
                                        </a>
                                    )}

                                    <ul>
                                        <li>
                                            {isInWishlist ? (
                                                <a
                                                    href="#"
                                                    onClick={() => deleteWishList()}
                                                    style={{ backgroundColor: '#CA1515' }}
                                                >
                                                    <span className={`icon_heart_alt`} style={{ color: 'white' }} />
                                                </a>
                                            ) : (
                                                <a
                                                    href="#"
                                                    onClick={() => addWishList()}
                                                    style={{ backgroundColor: 'white' }}
                                                >
                                                    <span className={`icon_heart_alt`} />
                                                </a>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Artist :</span>
                                            <p>{artist.userName}</p>
                                        </li>
                                        <li>
                                            <span>Owner:</span>
                                            <p>{audience.userName == null ? artist.userName : audience.userName}</p>
                                        </li>
                                        <li>
                                            <span>Category:</span>
                                            <p>{categoryName}</p>
                                        </li>

                                        <li>
                                            <span>Selling:</span>

                                            {artwork.artWorkStatus === 1 ? ( // If the artwork is sold
                                                <i className="icon_check_alt green"></i> // Render a red cross icon
                                            ) : (
                                                // If the artwork is not sold
                                                <i className="icon_close_alt red"></i> // Render a green checkmark icon
                                            )}
                                        </li>
                                        <li>
                                            <span>Create Date:</span>
                                            <p>{new Date(artwork.created).toLocaleString('vi-VN')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                            Introdution
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                            Specification
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                            Reviews ( 2 )
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Details Section End */}
            <div className="container" style={{ padding: '45px' }}>
                <div className="blog__details__comment">
                    <h5>{comments.length} Comment</h5>
                    <a href="#" className="leave-btn">
                        Leave a comment
                    </a>

                    {comments.map((comment, index) => (
                        <div className="blog__comment__item" key={index}>
                            <div className="blog__comment__item__pic">
                                <img src={img_avatar} alt="" />
                            </div>
                            <div className="blog__comment__item__text">
                                <h6>{commentAccountNames[index]}</h6>
                                <p>{comment.comment}</p>
                                <ul>
                                    <li>
                                        <i className="fa fa-clock-o" />{' '}
                                        {new Date(comment.created).toLocaleString('vi-VN')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact__content">
                    <div className="contact__form">
                        <form onSubmit={handleSubmit}>
                            <textarea
                                placeholder="Enter your reviewing"
                                value={review}
                                onChange={handleCommentChange}
                            />
                            <button type="submit" className="site-btn">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
