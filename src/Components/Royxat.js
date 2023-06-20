import React from "react";


function Royxat() {
    return (
        <>
            <div className="container_roy">
                <div className="roy_box">
                    <div className="box_1">
                        <div className="card_2">
                            <input className="img_roy" type='file'/>
                        </div>
                        <div className="login_prof_card_1">
                            <div className="box_prof-malumot">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Ismingiz</label>
                                    <input type="text" className="form-control roy_ma " id="exampleFormControlInput1" placeholder="sizni ismingiz"/>
                                    <label for="exampleFormControlInput1 " className="form-label">Familiyangiz</label>
                                    <input type="text" className="form-control  roy_ma " id="exampleFormControlInput1" placeholder="sizni familiyangiz"/>
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control  roy_ma " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sizni emailingiz"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control  roy_ma  " id="exampleInputPassword1" placeholder="sizni parolingiz"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">jonatish</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_2">
                        <label for="exampleFormControlTextarea1" class="form-label">Malumot</label>
                        <textarea class="form-control roy_ma2" id="exampleFormControlTextarea1" rows="3"  placeholder="..."></textarea>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Royxat