import React from "react";

const SubGridView = ({ restaurantItems, searchTerm, currentFilter }) => (
  <div className="row">
    {restaurantItems
      .filter(
        (x) => x.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      )
      .map((x, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">
                <a
                  href={`${x.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {x.title}
                </a>
              </h6>

              {currentFilter !== "neighborhood" ? (
                <span className="badge badge-pill badge-primary">
                  {x.neighborhood}
                </span>
              ) : (
                <span className="badge badge-pill badge-secondary">
                  {x.cuisine}
                </span>
              )}

              <p>{x.service}</p>
              {x.instagram === "" || x.instagram === undefined ? (
                <></>
              ) : (
                <p>
                  <i className="fab fa-instagram"></i>: {x.instagram}
                </p>
              )}
              {x.phone === '' ||  x.phone === undefined ? (<></>):(
              <p>
                <i className="fa fa-phone"></i>:{x.phone}
              </p>)}


              {/* <p>{x.merch}</p>
              <p>{x.giftcard}</p>
              <p>{x.other}</p> */}
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default SubGridView;
