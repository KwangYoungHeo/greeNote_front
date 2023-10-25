import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;
  // axios 설정
  axios.defaults.withCredentials = true;
  // navigate 선언
  const nav = useNavigate();

  // 로그인 함수
  const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = {};

    formData.forEach((value, key) => {
      obj[key] = value;
    });

    await axios.post(`${masterURL}/auth/login`, obj)
      .then((res) => {
        console.log(res);
        nav('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='login_container'>
      <div className="input_logo"> {/* 우리 로고 */}
        <img src="/Image/intro_logo.png" alt="logo" />
      </div>

      <div className='login_box'>
        <div className='login'>
          <span className="logo_font">greeNote</span>
          <span className="etc_font">의 서비스
            <br />이용을 위해 로그인 해 주세요.</span>
        </div>

        <form onSubmit={login}>
          <input
            className='join_id'
            placeholder='아이디'
            name='memberid'
          />
          <input
            className='join_pw'
            placeholder='비밀번호'
            name='password'
          />
          <br /><br /><br />

          <button type='submit' className='login_button'>
            로그인
          </button>
        </form>
      </div>

    </div >
  )
}

export default Login