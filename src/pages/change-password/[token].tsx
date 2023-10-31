import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postData } from "@utils/services";
import { server } from "@utils/server";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const token = query.token;
  const res = await fetch(`${server}forgotPw/${token}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}


const ChangePassword = ({ product }: any) => {
    console.log(product);
    const {register,watch,  handleSubmit,formState: { errors }, } = useForm();
    
    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <>
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
                                <p>ID : </p>
                            </div>
                            <div className="form__input-row">
                                <input className="form__input" id="password" type="password" placeholder="Password" 
                                    {...register("password",{ 
                                        required:  "please enter password" ,
                                        minLength: {
                                            value: 8,
                                            message: "min length is 8",
                                        }
                                    })}
                                    />
                                    {errors.password && (
                                        <span className="bg-yellow-400">{errors?.password?.message}</span>
                                    )}

                            </div>
                            <div className="form__input-row">
                                <input    className="form__input" 
                                type="password"  placeholder="Password Confirm" 
                                {...register("confirmPw",{ 
                                    required:  "please enter confirmPw" ,
                                    minLength: {
                                        value: 8,
                                        message: "min length is 8",
                                    },
                                    validate: (val: string) => {
                                        if (watch('password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })}
                                />
                                {errors.confirmPw && (
                                    <span className="bg-yellow-400">{errors.confirmPw.message}</span>
                                )}
                            </div>
                            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Reset password</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
  
export default ChangePassword

