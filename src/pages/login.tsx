/* eslint-disable import/no-unused-modules */
import { Suspense } from 'react';
import { SEO } from '@configs/seo.config';
import { useTranslations } from '@hooks/common/locales.hook';
import { Select } from 'antd';
import { Col, Row, Container, Table } from 'react-bootstrap';
import { DefaultSeo } from 'next-seo';
import { useLocalesStore } from 'src/stores/common/locales';
import Layout from '@components/common/Layout';
import { useForm } from "react-hook-form";
import Link from "next/link"
import { toast } from "react-toastify";
import { postData } from "@utils/services";
import { server } from "@utils/server";
import { saveState } from "@utils/localstorage";
import { useRouter } from "next/router";


type FormValues ={
    password:string;
    id: string;
}

const Login = () => {
    const { locale, t } = useTranslations();
    const changeLocale = useLocalesStore((state) => state.changeLocale);
    const handleChangeLocale = (value: TDefaultLocale) => {
        changeLocale(value);
        console.log(value);
    };


    const router = useRouter();
    const {   register,  handleSubmit,   formState: { errors },   } = useForm<FormValues>();
    const onSubmit = async (data: any) => {
        const res = await postData(`${server}auth/signIn`, {
          id: data.id,
          password: data.password,
        });
        console.log(res);
        if (res.status == 200) {
          //  console.log("res");
            saveState("userLogIn", res.data.authInfo);
            localStorage.setItem("token", res.data.token);
            toast.success("Login Success!", { autoClose: 1500 });
            setTimeout(() => {
                 router.push("/store");
            }, 2000);
        } else {
          toast.error("Login Fail!", { autoClose: 1500 });
        }
    };


    return (
    <>
        <DefaultSeo {...SEO} title="Login" />
        <div >

            <div className="all-title-box">
                <div
                    className="container p-5 text-center text-dark fw-bold fs-4"
                    style={{ backgroundColor: "#eeece1" }}
                >
                    BANANALINK <br/>
                    {t(`module_1.title`)}
                </div>
            </div>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mt-5">
                                    <label htmlFor="password" className="text-info">Language:</label>

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
                                <div className="form-group mt-2 ">
                                    <label htmlFor="id" className="text-info">Id:</label>
                                    <input type="text" id="id" className="form-control" 
                                    {...register("id", { 
                                        required: "please enter id"  ,
                                        minLength: {
                                            value: 6,
                                            message: "min length is 6",
                                        },
                                    })}  
                                    />
                                    <p>{errors.id?.message}</p>
                                </div>
                                 

                                <div className="form-group mt-2">
                                    <label htmlFor="username" className="text-info">Password:</label>
                                    <input type="password"  id="password" className="form-control" 
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
                                    <p>{errors.password?.message}</p>
                                   
                                </div>
                               
                                <div className="form-group mt-2">
                                    <button  className="btn btn--rounded btn--yellow btn-submit" type="submit">{t(`module_1.login`)}</button>
                                </div>
                                <div id="register-link" className="text-right">
                                    <p className="form__signup-link">Not a member yet? <Link href="/register">{t(`module_1.SignUp`)}</Link></p>
                                </div>
                                <div id="register-link" className="text-right">
                                    <p className="form__signup-link">Forgot password <Link href="/forgot-password">Forgot</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;


