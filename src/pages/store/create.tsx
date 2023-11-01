
import { useForm } from "react-hook-form";

type FormValues ={
    name:string;
    url: string;
}
const CreateStore = () => {
    const {   register,  handleSubmit,   formState: { errors },   } = useForm<FormValues>();
    const onSubmit = async (data: any) => {
        console.log(data);
    };
    return (
    <>
        <div >
            <div className="all-title-box">
                <div
                    className="container p-5 text-center text-dark fw-bold fs-4"
                    style={{ backgroundColor: "#eeece1" }}
                >
                    BANANALINK 12
                </div>
            </div>
        </div>
         <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleSubmit(onSubmit)}>
                               
                                <div className="form-group mt-2 ">
                                    <label htmlFor="id" className="text-info">Name:</label>
                                    <input type="text" id="id" className="form-control" 
                                    {...register("name", { 
                                        required: "please enter name"  ,
                                       
                                    })}  
                                    />
                                    <p>{errors.name?.message}</p>
                                </div>
                                
                                <div className="form-group mt-2 ">
                                    <label htmlFor="id" className="text-info">Url:</label>
                                    
                                </div>
                                <div className="input-group ">
                                    <span className="input-group-text" id="basic-addon3">https://treetown.com/</span>
                                    <input type="text" className="form-control" id="url" aria-describedby="basic-addon3"
                                        {...register("url", { 
                                        required: "please enter url"  ,
                                        minLength: {
                                            value: 3,
                                            message: "min length is 3",
                                        }
                                    })}  
                                    />
                                    
                                </div>
                                <p>{errors.url?.message}</p>
                               
                                <div className="form-group mt-2">
                                    <button  className="btn btn--rounded btn--yellow btn-submit" type="submit">Create</button>
                                </div>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );   
};

export default CreateStore;
