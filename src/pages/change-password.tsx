import Link from 'next/link';
import { useForm } from "react-hook-form";



const ChangePassword = () => {
    const {  handleSubmit } = useForm();
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
                            <p>ID : </p>
                            <div className="form__input-row">
                                <input 
                                    className="form__input" 
                                    type="password" 
                                    placeholder="Password" 
                                    name="password"
                                />
                         
                            </div>
                            <div className="form__input-row">
                                <input 
                                className="form__input" 
                                type="password" 
                                placeholder="Password Confirm" 
                                name="confimPw"
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
  
export default ChangePassword

