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
        <div className="pic">圖</div>
        <div className="signInfo">
          <div className="subSlogan">享樂酒店，誠摯歡迎</div>
          <div className="slogan">立即開始旅程</div>
          <form onSubmit={handleSubmit(logInHandler)}>
            <label htmlFor="email" className="form-label">
              電子信箱
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="basic-addon3"
              />
            </div>
            <label htmlFor="password" className="form-label">
              密碼
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="password"
                aria-describedby="basic-addon3"
              />
            </div>
            <button type="button" className="btn btn-primary">
              會員登入
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
