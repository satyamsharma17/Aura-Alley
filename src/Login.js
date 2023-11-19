import styles from "./css/logincss/style.module.css";

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <form action="" className={styles.loginform}>
                    <h3>Login Form</h3>
                    <div className={styles.formwrapper}>
                        <label htmlFor="">Email</label>
                        <input type="text" className={styles.formcontrol} />
                    </div>
                    <div className={styles.formwrapper}>
                        <label htmlFor="">Password</label>
                        <input type="password" className={styles.formcontrol} />
                    </div>
                    <p>Forget Password?</p>
                    <button>Login Now</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
