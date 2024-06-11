export const Carousel = () => {
    return (
        <div className="container mt-5" style={{height: 550}}>
            <div className="homepage-carousel-title">
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
        </div>
        <div className="carousel carousel-dark slide mt-5 d-none d-lg-block" id="carouselExampleControls" data-bs-interval="false">

            {/* Desktop */}
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row d-flex justify-content-center align-items-center"></div>
                </div>
            </div>
        </div>
    );
}