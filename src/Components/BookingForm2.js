import { useFormik } from "formik";
import { bookingSchema } from "../Schemas/Schema";
import { useNavigate } from "react-router-dom";
import restaurant from '../Images/restaurant.jpg'




function BookingForm2(props) {
    const onSubmit = async (value, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/confirmed");
    console.log("submitted");
}
    const navigate = useNavigate();
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            info:"",
        },
        validationSchema: bookingSchema,
        onSubmit,

    })
    return(
        <main className="container booking">
            <div className="bookingForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        value={values.firstName}
                        onChange={handleChange}
                        id="firstName"
                        type={"text"}
                        placeholder="Enter your first name"
                        onBlur={handleBlur}
                        className={errors.firstName && touched.firstName ? "input-error" : ""}
                    />
                    {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        value={values.lastName}
                        onChange={handleChange}
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        onBlur={handleBlur}
                        className={errors.lastName && touched.lastName ? "input-error" : ""}
                    />
                    {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                    <label htmlFor="email">Email</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <label htmlFor="info">Additional information</label>
                    <textarea
                        value={values.info}
                        onChange={handleChange}
                        id="info"
                    >
                    </textarea>
                    <input className="button" aria-label='Make reservation' disabled={isSubmitting} type="submit" value="Make Your reservation"/>
                </form>
            </div>
            <div className="bookingImg">
                <img src={restaurant}></img>
            </div>
        </main>
    );
}

export default BookingForm2;