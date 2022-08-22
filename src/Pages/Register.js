import { Navbar,Footer } from "../Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const RegisterPage = () => {
  return (
    <div>
        <div className="container justify-content-center px-5">
          <div className="row register-form">
            <h1 className="h3 fw-normal mb-3" style={{ marginTop: 30 }}>
              Registration
            </h1>
            <form method="post">

            </form>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="Name"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                name="surname"
                placeholder="Surname"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="col-6">
              <input
                type="password"
                className="form-control"
                name="passwordverify"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="col mb-3">
            <textarea
              className="form-control"
              name="address"
              placeholder="Address"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="col">
            <input
              type="checkbox"
              id="check1"
              name="Course[]"
              defaultValue="Math Booster"
            />
            <label htmlFor="check1">Course: Math Booster</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              id="check2"
              name="Course[]"
              defaultValue="Physic Booster"
            />
            <label htmlFor="check1">Course: Physic Booster</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              id="check3"
              name="Course[]"
              defaultValue="Engineering Workshop"
            />
            <label htmlFor="check1">Course: Engineering Workshop</label>
          </div>
          <div className="col mt-3">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              defaultValue="ยืนยัน"
              style={{
                color: "white",
                backgroundColor: "lightseagreen",
                border: "none",
              }}
            />
          </div>
        </div>
        {/*Insert Space*/}
        <div style={{ height: 800 }}></div>
    </div>
  );
};

function Register(){
    return(
        <div>
            <Navbar/>
            <RegisterPage/>
            <Footer/>
        </div>
    )
  }

  export default Register;