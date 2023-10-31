import { useForm } from "react-hook-form";
import { schema } from "@components/PageComponents/Store/CreateStore/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateStoreAPI } from "../api/Store/Store";


const CONTENT = [
  "URL Name at least 3 characters.",
  "Only English letters and numbers are allowed, no spaces.",
  "The URL cannot be changed.",
];

const CreateStore = () => {
  const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  const { mutate } = useMutation(CreateStoreAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["store"] });
      toast.success("Create Store Success!", { autoClose: 1500 });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, { autoClose: 1500 });
    },
  });
    const onSubmit = (data: any) => {
        mutate({
          name: data.name,
          url: `https://treetown.com/${data.url}`,
          position: "Owner",
        });
      };
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
            <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="form-page mt-5 pb-0" style={{ width: "500px" }}>
            <input
              type="text"
              placeholder="Name"
              className="w-100 p-1"
              id="name"
              {...register("name")}
            />
            <span
              className="invalid-feedback d-flex error-message ps-2"
              style={{ height: "16px" }}
            >
              {errors.name && errors.name.message}
            </span>
            
          </div>

          <div
            className="pb-0 pt-5 d-flex align-items-center"
            style={{ width: "500px" }}
          >
            <div className="text-dark pb-3">https://treetown.com/</div>
            <div className="w-100">
              <input
                id="url"
                type="text"
                className="w-100 p-1 form__input"
                placeholder="Url"
                {...register("url")}
              />

              <span
                className="invalid-feedback d-flex error-message ps-2 w-100"
                style={{ height: "16px" }}
              >
                {errors.url && errors.url.message}
              </span>
            </div>
          </div>
        
          <div className="form-page pb-0">
            <div className="container">
              <div className="form-block">
                <div className="form d-flex flex-column mb-3">
                  <button
                    type="submit"
                    className="btn p-2 px-5 "
                    style={{ backgroundColor: "#6d9eeb" }}
                  >
                    <div
                      className="text-dark fw-semibold fs-6"
                      style={{ backgroundColor: "#9fc5e8" }}
                    >
                      Confirm
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
    </>
    );
};

export default CreateStore;
