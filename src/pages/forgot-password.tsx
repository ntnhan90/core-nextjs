import Link from 'next/link';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import { SEO } from '@configs/seo.config';
import { postData } from "@utils/services";
import { server } from "@utils/server";
import { schema } from "@components/PageComponents/Store/CreateStore/schema";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPassword = () => {
    const {register,  handleSubmit,formState: { errors }, } = useForm();

    const router = useRouter();


    const onSubmit = async (data: any) => {
        console.log(data);
        const res = await postData(`${server}auth/forgotPw`, {
            email: data.email,
        });
        console.log(res);

        if (res.status == 200) {
            toast.success(" Request Success!", { autoClose: 1500 });
            setTimeout(() => {
              //  router.push("/change-password");
            }, 200000);
        } else {
            toast.error("Request Fail!", { autoClose: 1500 });
        }

       
    };

    

    return (
    <>  
        <DefaultSeo {...SEO} title="Register" />
        <div className="all-title-box">
            <div
                className="container p-5 text-center text-dark fw-bold fs-4"
                style={{ backgroundColor: "#eeece1" }}
            >
                BANANALINK
            </div>
        </div>  
        <section className="form-page">
            <div className="container">
                <div className="form-block">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__input-row">
                        <input 
                            className="form__input" 
                            placeholder="email" 
                            type="text" 
                            {...register("email",{
                                required: "please enter email",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format",
                                },
                            })}
                        />

                        {errors.email && (
                            <span className="bg-yellow-400">{errors.email.message}</span>
                        )}
                        </div>

                        <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Confirm</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
  
export default ForgotPassword