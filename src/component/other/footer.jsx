import React from "react";

export default function FooterComponent() {
  return (
    <footer className="bg-light text-dark mt-5 shadow-sm">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-danger">AUTO WORLD</h5>
            <p className="small">
              Your trusted partner for buying and selling quality cars across India.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="small mb-1"><i className="fas fa-envelope me-2"></i> support@autoworld.com</p>
            <p className="small mb-1"><i className="fas fa-phone me-2"></i> +91 123456789</p>
            <p className="small"><i className="fas fa-map-marker-alt me-2"></i> Hyderabad, India</p>
          </div>
        </div>

        <hr />
        <div className="text-center small text-muted">
          &copy; {new Date().getFullYear()} AUTO WORLD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
