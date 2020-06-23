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
              <h4 className="card-title">
                <a
                  href={`${x.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {x.title}
                </a>
              </h4>

              {currentFilter !== "neighborhood" ? (
                <span className="badge badge-pill badge-primary mr-2">
                  {x.neighborhood}
                </span>
              ) : (
                <></>
              )}
              {x.cuisine === "" || x.cuisine === undefined ? (
                <></>
              ) : (
                <span className="badge badge-pill badge-secondary">
                  {x.cuisine}
                </span>
              )}

              <p className="pt-2 pb-2">{x.service}</p>
              <p>
                {x.phone === "" || x.phone === undefined ? (
                  <></>
                ) : (
                  <span>
                    <i className="fa fa-phone mr-2"></i>{x.phone}
                  </span>
                )}
                </p>
                <p>
                {x.instagram === "" || x.instagram === undefined ? (
                  <></>
                ) : (
                  <span>
                    <i className="fab fa-instagram mr-2"></i>
                    <a href={`https://instagram.com/${x.instagram.slice(1)}`}>
                      {x.instagram}
                    </a>
                  </span>
                )}
              </p>

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
