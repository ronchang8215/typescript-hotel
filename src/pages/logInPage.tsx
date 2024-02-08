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
            fetch("https://freyja-773y.onrender.com/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="nav">
        <img src="/src/assets/logo.png" width={200} />
      </div>
      <div className="content d-flex">
        <div className="login-bg" />
        <div className="signInfo d-flex justify-content-center align-items-center my-0 mx-auto">
          <form onSubmit={handleSubmit(logInHandler)}>
            <div className="subSlogan text-primary title-16-b mb-2">
              享樂酒店，誠摯歡迎
            </div>
            <div className="slogan text-light h1-48-b mb-10">立即開始旅程</div>
            {/* 電子信箱 */}
            <label
              htmlFor="email"
              className="form-label text-light title-16-b mb-2"
            >
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
            <label
              htmlFor="password"
              className="form-label text-light title-16-b mb-2"
            >
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
                  className="form-check-label text-light title-16-b mb-10"
                  htmlFor="flexCheckDefault"
                >
                  記住帳號
                </label>
              </div>
              <div>
                <a href="#" className="link-primary title-16-b">
                  忘記密碼
                </a>
              </div>
            </div>

            {/* 會員登入 btn */}
            <button
              type="submit"
              className="btn btn-primary title-16-b mb-10 w-100"
            >
              <div className="py-1">會員登入</div>
            </button>

            {/* 前往註冊 */}
            <div className="d-flex justify-content-start title-16-b">
              <span className="text-light me-2">沒有會員嗎?</span>
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
