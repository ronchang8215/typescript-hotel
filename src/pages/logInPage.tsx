import { useForm } from "react-hook-form";

const LogInPage = () => {
  interface LogInForm {
    email: string;
    password: string;
    checkbox: boolean;
  }
  const { register, handleSubmit } = useForm<LogInForm>({
    defaultValues: {
      email: "",
      password: "",
      checkbox: false,
    },
  });

  const logInHandler = (data: LogInForm) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="nav">
        <div>享樂酒店</div>
      </div>
      <div className="content d-flex">
        <div className="login-bg" />
        <div className="signInfo d-flex justify-content-center align-items-center my-0 mx-auto">
          <form onSubmit={handleSubmit(logInHandler)}>
            <div className="subSlogan text-primary">享樂酒店，誠摯歡迎</div>
            <div className="slogan text-light">立即開始旅程</div>
            {/* 電子信箱 */}
            <label htmlFor="email" className="form-label text-light">
              電子信箱
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="basic-addon3"
                {...register("email")}
              />
            </div>
            {/* 密碼 */}
            <label htmlFor="password" className="form-label text-light">
              密碼
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="password"
                aria-describedby="basic-addon3"
                {...register("password")}
              />
            </div>

            {/* 記住帳號 checkbox & 忘記密碼 */}
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  {...register("checkbox")}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexCheckDefault"
                >
                  記住帳號
                </label>
              </div>
              <div>
                <a href="#" className="link-primary">
                  忘記密碼
                </a>
              </div>
            </div>

            {/* 會員登入 btn */}
            <button type="submit" className="btn btn-primary">
              會員登入
            </button>

            {/* 前往註冊 */}
            <div className="d-flex justify-content-start">
              <span className="text-light">沒有會員嗎?</span>
              <a href="#" className="link-primary">
                前往註冊
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
