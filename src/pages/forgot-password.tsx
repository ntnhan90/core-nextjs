import Link from 'next/link';
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const {register,  handleSubmit } = useForm();
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
                    <h2 className="form-block__title">Forgot your password?</h2>
                    <p className="form-block__description">Enter your email or phone number and recover your account</p>
                
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