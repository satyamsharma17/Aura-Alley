import styles from'./css/signupcss/style.module.css'
// import "./css/signupcss/style.css.map";
// import styles from "./css/signupcss/style.module.scss";




const Signup = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <form action="" className={styles.signupform}>
                    <h3>Registration Form</h3>
                    <div className={styles.formgroup}>
                        <div className={styles.formwrapper}>
                            <label htmlFor="">First Name</label>
                            <input type="text" className={styles.formcontrol} />
                        </div>
                        <div className={styles.formwrapper}>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className={styles.formcontrol} />
                        </div>
                    </div>
                    <div className={styles.formwrapper}>
                        <label htmlFor="">Email</label>
                        <input type="text" className={styles.formcontrol} />
                    </div>
                    <div className={styles.formwrapper}>
                        <label htmlFor="">Password</label>
                        <input type="password" className={styles.formcontrol} />
                    </div>
                    <div className={styles.formwrapper}>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className={styles.formcontrol} />
                    </div>
                    <div className={styles.checkbox}>
                        <label>
                            <input type="checkbox" /> I caccept the Terms of Use
                            &amp; Privacy Policy.
                            <span className="checkmark" />
                        </label>
                    </div>
                    <button>Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;