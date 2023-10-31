/* eslint-disable import/no-unused-modules */
import { Suspense } from 'react';
import { SEO } from '@configs/seo.config';
import { useTranslations } from '@hooks/common/locales.hook';
//import { Col, Row, Select, Typography, Watermark } from 'antd';
import { Col, Row, Container, Table } from 'react-bootstrap';
import { DefaultSeo } from 'next-seo';
import { useLocalesStore } from 'src/stores/common/locales';
import Layout from '@components/common/Layout';
import { useForm } from "react-hook-form";
import Link from "next/link"

const Login = () => {
  const { locale, t } = useTranslations();
  const changeLocale = useLocalesStore((state) => state.changeLocale);
  const handleChangeLocale = (value: TDefaultLocale) => {
    changeLocale(value);
    console.log(value);
  };


  const {   register,  handleSubmit,   formState: { errors },   } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };


  return (
    <>
      <DefaultSeo {...SEO} title="Login" />
      <div >
        <h3 className="text-center pt-5">{t(`module_1.title`)}</h3>

        <div className="all-title-box">
          <div
            className="container p-5 text-center text-dark fw-bold fs-4"
            style={{ backgroundColor: "#eeece1" }}
          >
            BANANALINK
          </div>
        </div>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="text-center text-info">Login</h3>

                            <div className="form-group mt-5">
                                <label htmlFor="password" className="text-info">Language:</label>
                                <select  className="form-control roles-list ui-select"
                                  
                                  >
                                  <option value="vi">Tiếng Việt</option>
                                  <option value="en">English</option>
                                </select>
                            </div>
                            <div className="form-group mt-2 ">
                                <label htmlFor="username" className="text-info">Id:</label>
                                <input type="text" id="username" className="form-control" 
                                {...register("id",{
                                  required: true,
                                })}  
                                />

                                <span
                                  className="invalid-feedback d-flex error-message ps-2"
                                  style={{ height: "16px" }}
                                >
                                </span>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="username" className="text-info">Password:</label>
                                <input type="text"  id="username" className="form-control" 
                                {...register("password",{ required: true })}
                                />

                                <span
                                  className="invalid-feedback d-flex error-message ps-2 w-100"
                                  style={{ height: "16px" }}
                                >
                                </span>
                            </div>
                            
                           
                            <div className="form-group mt-2">
                                <button  className="btn btn--rounded btn--yellow btn-submit" type="submit">Login</button>
                            </div>
                            <div id="register-link" className="text-right">
                              <p className="form__signup-link">Not a member yet? <Link href="/register">Sign up</Link></p>
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


