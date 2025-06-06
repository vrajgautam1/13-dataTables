import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        
                        <img
                            src="./ReactTailwindTable1_GLV35dG.png"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            React Data Tables along with toastify
                        </h1>
                        <p className="lead">
                            Tired of Regular tables? Take your Web Development
                            Game to the next Level using React DataTables that
                            empower you to seamlessly integrate advanced
                            features like <strong>sorting and arranging data</strong> by simply
                            <u>adding the properties</u>
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            
                            <Link
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                to="/form"
                            >
                                Lets Start
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
