
const Store = () => {

  return (
    <>
      <div style={{ minHeight: "900px" }}>
        <div className="all-title-box">
          <div
            className="container p-5 text-center text-dark fw-bold fs-4"
            style={{ backgroundColor: "#eeece1" }}
          >
            BANANALINK
          </div>
        </div>
        <div className="d-flex flex-column mb-3 justify-content-center">
          <section className="form-page mt-5 pb-0">
            <div className="container">
              <div className="form-block">
                <div className=" text-dark text-center fw-semibold fs-6">
                  Please select a registered store.
                </div>
                <div className="form d-flex flex-column mb-3">
                  <a
                    href="/store/create"
                    className="btn p-2 px-5 "
                    style={{ backgroundColor: "#6d9eeb" }}
                  >
                    <div
                      className="text-dark fw-semibold fs-6"
                      style={{ backgroundColor: "#9fc5e8" }}
                    >
                      New store registration
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="pb-5 mb-5 d-flex flex-column justify-content-center align-items-center">
            <ul className="d-flex flex-column gap-2">
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
