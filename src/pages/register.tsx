
import Link from "next/link"
import { useForm } from "react-hook-form";
import { DefaultSeo } from 'next-seo';
import { SEO } from '@configs/seo.config';
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { postData } from "@utils/services";
import { server } from "@utils/server";

// translate
import { useTranslations } from '@hooks/common/locales.hook';
import { Select } from 'antd';
import { useLocalesStore } from 'src/stores/common/locales';

const RegisterPage = () => {
    const { locale, t } = useTranslations();
    const changeLocale = useLocalesStore((state) => state.changeLocale);
    const handleChangeLocale = (value: TDefaultLocale) => {
        changeLocale(value);
        console.log(value);
    };
        



    const { register, handleSubmit,watch,   formState: { errors },  } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        console.log(data);
        const res = await postData(`${server}auth/signUp`, {
          id: data.id,
          name:data.name,
          email:data.email,
          password: data.password,
          confirmPw: data.confirmPw,
        });
        console.log(res);
       
        if (res.status == 200) {
            toast.success("A verification link has been sent to your email. Please check your email.", { autoClose: 1500 });
            setTimeout(() => {
                router.push("/goto_login");
            }, 3000);
        } else {
            toast.error("Register Fail!", { autoClose: 1500 });
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
            <section className="form-page ">
                <div className="container">
                    <div className="form-block row justify-content-center align-items-center">
                        <h2 className="form-block__title">Create an account </h2>
                        
                        <div className="form-block">
                            <form className="form"  onSubmit={handleSubmit(onSubmit)}>
                                <div className="form__input-row">
                                   <Select
                                        className="form-control roles-list ui-select"
                                        defaultValue={locale}
                                        onChange={handleChangeLocale}
                                        options={[
                                          { value: 'en', label: 'English' },
                                          { value: 'vi', label: 'Tiếng Việt' },
                                        ]}
                                    />
                                </div>
                                <div className="form__input-row form-group mt-2">
                                    <input className="form__input" placeholder="id" type="text" 
                                    {...register("id",{
                                        required: "please enter id", 
                                        minLength: {
                                            value: 6,
                                            message: "min length is 6",
                                        },   
                                    })}
                                    />

                                    {errors.id && (
                                        <span className="bg-yellow-400">{errors.id.message}</span>
                                    )}
                                </div>
                          
                                <div className="form__input-row form-group mt-2">
                                    <input className="form__input" type="password" placeholder="Password" 
                                    {...register("password",{ 
                                        required:  "please enter password" ,
                                        minLength: {
                                            value: 8,
                                            message: "min length is 8",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Passwords include letters, numbers and special characters",
                                        },
                                    })}
                                    />
                                    {errors.password && (
                                        <span className="bg-yellow-400">{errors.password.message}</span>
                                    )}
                                </div>

                                <div className="form__input-row form-group mt-2">
                                    <input className="form__input" type="password" placeholder="confirmPw" 
                                    {...register("confirmPw",{ 
                                        required:  "please enter confirmPw" ,
                                        minLength: {
                                            value: 8,
                                            message: "min length is 8",
                                        },
                                        validate: (val: string) => {
                                            if (watch('password') != val) {
                                              return "Your passwords do not match";
                                            }
                                        },
                                    })}/>

                                    {errors.confirmPw && (
                                        <span className="bg-yellow-400">{errors.confirmPw.message}</span>
                                    )}
                                </div>

                                <div className="form__input-row form-group mt-2">
                                    <input className="form__input" type="email" placeholder="email" 
                                    {...register("email",{ 
                                        required: "please enter email" ,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Entered value does not match email format",
                                        },
                                    })}/>

                                    {errors.email && (
                                        <span className="bg-yellow-400">{errors.email.message}</span>
                                    )}
                                </div>
                                <button  className="btn btn--rounded btn--yellow btn-submit" type="submit">{t(`module_1.SignUp`)}</button>

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