import Link from 'next/link';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import { SEO } from '@configs/seo.config';

const ForgotPassword = () => {
    const {register,  handleSubmit } = useForm();

    const router = useRouter();


    const onSubmit = async (data: any) => {
        console.log(data);

        toast.success("Login Success!", { autoClose: 1500 });
        setTimeout(() => {
            router.push("/chage-password");
        }, 10000);
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
                            {...register("email")}
                        />
                        </div>

                        <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
  
export default ForgotPassword