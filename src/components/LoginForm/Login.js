import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import "./LoginStyle.css"

export default function login() {
    return (
        <section className="login-section">
            <div className='container py-5'>
            <h2 className='fs-2 text-white'>Login</h2>

            <div className='border border-secondary w-25 mx-auto py-3 from-body text-white'>
                <form action="" className='py-3'>
                    <div className="input-field border border-secondary w-75 mx-auto py-2">
                        <span className="input-icon"><AiOutlineMail/></span>
                        <input type="text" name="username" className='border-0' id="" placeholder="email" />
                    </div>

                    <div className="input-field border border-secondary w-75 mx-auto mt-3 py-2">
                        <span className="input-icon"><BiKey/></span>
                        <input type="password" className='border-0' name="username" id="" placeholder="password" />
                    </div>
                    <input type="submit" value="Login" className='mt-3 w-75 mx-auto py-2 login-btn' />
                </form>

                <div className='w-75 mx-auto mt-3'>
                    <div className="login-footer d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'><input type="checkbox" name="" id="" /><span className='ms-1'>Remember Me</span></div>
                        <div><span className="forgot-password text-gray">Forgot Password?</span></div>
                    </div>
                </div>
            </div>
            <div className='w-100 mx-auto py-3 small-para text-white'>
                    <p className=''>New to SmugMug? <a href='google.com'> Start your free trial.</a> </p>
                    <p className='privecy-policy'> By logging in, you agree to SmugMug's <span>Terms of Use</span> and <span>Privacy Policy</span></p>
                </div>

        </div>
        </section>
    )
}
