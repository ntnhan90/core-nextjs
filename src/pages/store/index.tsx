import { useQuery } from "@tanstack/react-query";
import { GetStore } from "../api/Store/Store";
import Link from "next/link";
const Store = () => {
  const { data, isLoading } = useQuery<any>({
    queryKey: ["store"],
    queryFn: () => GetStore(),
  });
  console.log(data?.data);
  const realData = data?.data;

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
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="pb-5 mb-5 d-flex flex-column justify-content-center align-items-center">
            <ul className="d-flex flex-column gap-2">
              {isLoading ? (
                <></>
              ) : (
                realData.map((item: any) => (
                  <li key={item.name} style={{ listStyleType: "disc" }}>
                    <div className="d-flex">
                      <div className="text-dark p-2">
                         <Link
                          href="/dashboard"
                        >  
                        {item.name}
                        </Link>
                      </div>{" "}
                      <div
                        className="text-dark p-2 border border-secondary rounded-circle"
                        style={{ backgroundColor: "#eeece1" }}
                      > 
                       
                        {item.position}
                        
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
