import Link from "next/link"
import { DefaultSeo } from 'next-seo';
import { SEO } from '@configs/seo.config';

const GotoLogin = () => {
    return (
        <>  
            <DefaultSeo {...SEO} title="GotoLogin" />
            <div className="all-title-box">
                <div
                    className="container p-5 text-center text-dark fw-bold fs-4"
                    style={{ backgroundColor: "#eeece1" }}
                >
                BANANALINK
                </div>
            </div>  
            <p className="text-center">We have confirmed your email and your registration has been completed. Please log in again.</p>
            <section className="form-page">
                <div className="container">
                    <div className="form-block"> 
                        <div className="form"> 
                            <Link href="/login"  className="btn btn--rounded btn--yellow btn-submit">
                                Goto Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
  
export default GotoLogin