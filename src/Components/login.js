import React from "react";

function Login () {
    return(
        <>
            <div className="Login">
                <div className="Login_card">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label log_ma1">Ismingiz</label>
                        <input type="text" className="form-control log_ma " id="exampleFormControlInput1" placeholder="sizni ismingiz"/>
                        <label for="exampleFormControlInput1 " className="form-label log_ma2">Familiyangiz</label>
                        <input type="text" className="form-control  log_ma " id="exampleFormControlInput1" placeholder="sizni familiyangiz"/>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label log_ma3">Email address</label>
                               <input type="email" className="form-control  log_ma " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sizni emailingiz"/>
                            </div>
                            <div className="mb-3">
                               <label for="exampleInputPassword1" className="form-label log_ma4">Password</label>
                               <input type="password" className="form-control  log_ma  " id="exampleInputPassword1" placeholder="sizni parolingiz"/>
                           </div>
                           <button type="submit" className="btn btn-primary  jonat">jonatish</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login ;