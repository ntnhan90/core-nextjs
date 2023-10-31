
import Link from "next/link"
import { useForm } from "react-hook-form";
import { DefaultSeo } from 'next-seo';
import { SEO } from '@configs/seo.config';

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    //const router = useRouter();

    const onSubmit = async (data: any) => {
        console.log(data);
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
            <section className="form-page ">
                <div className="container">
                    <div className="form-block row justify-content-center align-items-center">
                        <h2 className="form-block__title">Create an account </h2>
                        
                        <div className="form-block">
                            <form className="form"  onSubmit={handleSubmit(onSubmit)}>
                                <div className="form__input-row">
                                   <select className="form-group form-select form__input" aria-label="Default select example">
                                      <option selected>Languages</option>
                                      <option value="1">VietNam</option>
                                      <option value="2">Korea</option>
                                      <option value="3">English</option>
                                    </select>
                                </div>
                                <div className="form__input-row form-group mt-2">
                                    <input className="form-control" placeholder="id" type="text" 
                                        {...register("id",{required: true,    })}
                                    />
                                </div>
                          
                                <div className="form__input-row form-group mt-2">
                                    <input className="form-control" type="password" placeholder="Password" 
                                        {...register("password",{ required: true ,minLength: 6 })}
                                    />
                                </div>

                                <div className="form__input-row form-group mt-2">
                                    <input className="form-control" type="password" placeholder="confirmPw" {...register("confirmPw",{ required: true })}/>
                                </div>

                         
                                <button  className="btn btn--rounded btn--yellow btn-submit" type="submit">Sign up</button>

                                <p className="form__signup-link">
                                    <Link href="/login">
                                        Are you already a member?
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
  
export default RegisterPage