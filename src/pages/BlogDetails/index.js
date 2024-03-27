import React, { useEffect, useState } from 'react';
import axios from 'axios';
import appsetting from '../../appsetting.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const { SERVER_API } = appsetting;

function BlogDetails() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/Category/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setCategories(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Blog Details Section Begin */}
            <section className="blog-details spad">
                <div className="container">
                    <div className="row" style={{ padding: '50px' }}>
                        <div className="col-lg-8 col-md-8">
                            <div className="blog__details__content">
                                <div className="blog__details__item">
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb25beed-ac71-4492-ae55-a5ec271949e7/dg2fe7r-560a876b-b411-4bbf-af59-8dcac50fbf59.png/v1/fill/w_1280,h_715,q_80,strp/4k_picasso_impressionism_by_refinedpermutations_dg2fe7r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE1IiwicGF0aCI6IlwvZlwvZmIyNWJlZWQtYWM3MS00NDkyLWFlNTUtYTVlYzI3MTk0OWU3XC9kZzJmZTdyLTU2MGE4NzZiLWI0MTEtNGJiZi1hZjU5LThkY2FjNTBmYmY1OS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.r2PRrxdY7uuKyiaedXTrZ2fE3yXCtkMH3BUCxm5eRVM"
                                        alt=""
                                    />
                                    <div className="blog__details__item__title">
                                        <span className="tip">The beauty of art</span>
                                        <h4>ArtHub: Discover and Share Art Online</h4>
                                        <ul>
                                            <li>
                                                by <span> Chần Dinh</span>
                                            </li>
                                            <li>March 25, 2024</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__details__desc">
                                    <p>
                                        ArtHub is an online platform dedicated to promoting art and creativity,
                                        providing a vibrant space for artists and art enthusiasts worldwide. With its
                                        diverse range of artworks spanning various mediums and styles, ArtHub offers a
                                        comprehensive collection that caters to every artistic taste. Whether you're an
                                        amateur enthusiast or a seasoned professional, ArtHub welcomes individuals from
                                        all walks of life to explore, share, and connect through the universal language
                                        of art.
                                    </p>
                                    <p>
                                        At ArtHub, artists have the opportunity to showcase their work to a global
                                        audience, fostering connections and collaborations with fellow creators. Through
                                        features such as profile customization and interactive galleries, artists can
                                        curate their portfolios and engage with viewers, receiving valuable feedback and
                                        exposure. Similarly, art enthusiasts can immerse themselves in a diverse array
                                        of artworks, discovering new talents and perspectives while interacting with the
                                        vibrant community of like-minded individuals.
                                    </p>
                                </div>
                                <div className="blog__details__quote">
                                    <div className="icon">
                                        <i className="fa fa-quote-left" />
                                    </div>
                                    <p>
                                        Beyond being a mere showcase platform, ArtHub serves as a catalyst for
                                        creativity, providing resources and support to nurture artistic growth. Through
                                        workshops, tutorials, and forums, artists can hone their skills, explore new
                                        techniques, and stay updated on the latest trends in the art world.
                                        Additionally, ArtHub hosts virtual events and challenges, encouraging
                                        participants to push their boundaries and unleash their creative potential in a
                                        collaborative environment.
                                    </p>
                                </div>
                                <div className="blog__details__desc">
                                    <p>
                                        ArtHub celebrates the rich tapestry of human expression, embracing diversity in
                                        all its forms. From traditional paintings to experimental installations, ArtHub
                                        showcases a kaleidoscope of perspectives and voices, fostering inclusivity and
                                        understanding. By providing a platform for marginalized artists and
                                        underrepresented communities, ArtHub strives to amplify their voices and
                                        contribute to a more equitable and inclusive art ecosystem. Join us on ArtHub
                                        and embark on a journey of discovery, creativity, and connection in the
                                        boundless realm of art.
                                    </p>
                                </div>
                                <div className="blog__details__tags">
                                    <a href="#">Art</a>
                                    <a href="#">Painting</a>
                                    <a href="#">Drawing</a>
                                    <a href="#">Sculpture</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul>
                                        {categories.map((category) => (
                                            <li>
                                                <a href="#">
                                                    {category.categoryName} <span>({category.artWorks.length})</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>New user</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                All <span>(250)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Fashion week <span>(80)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Street style <span>(75)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Lifestyle <span>(35)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Beauty <span>(60)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Details Section End */}
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-1.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-2.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-3.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-4.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-5.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-6.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instagram End */}
        </div>
    );
}

export default BlogDetails;
