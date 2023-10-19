/* 식물 추가 페이지 */

import React from 'react'
import AiHeader from '../components/AiHeader'
import { Link } from 'react-router-dom'


const AddGreen = () => {
  return (
    <div className='add_container'>
      <AiHeader />
      <div className='addGreen'>
        내 반려 식물의 프로필
      </div>

      <form>
        <div className='photoGreen'>{/* 사진과 입력 */}
          photo
        </div>
        <div>
          사진등록하기
        </div>
        <div className='input_container2'>
          <input
            className='greenName'
            placeholder='식물의 실제 이름'
          />
          <input
            className='greenStart'
            placeholder='키우기 시작한 날    ex) 23-10-18'
          />
          <input
            className='Lastwater'
            placeholder='마지막 물 준 날       ex) 23-10-18'
          />
          <input
            className='greenNickname'
            placeholder='애칭'
          />
          <input
            className='greenText'
            placeholder='한 줄 메세지'
          />
          <input
            className='greenColor'
            placeholder='대표색 지정'
          />
        </div>

        <div className='gardening_container'> {/* 관리주기설정 */}
          <div className='title'>
            관리 주기 설정
          </div>
          <div className='info_text'>
            관리주기는 비설정 가능
          </div>
          <div className="switch_control"> {/* 스위치 버튼 */}
            <div className='text3'>
              물 주기
            </div>
            <div className="check">
              <input id="check-1" type="checkbox" />
              <label for="check-1" />
            </div>
          </div>
          <div className="switch_control"> {/* 스위치 버튼 */}
            <div className='text3'>
              분갈이하기
            </div>
            <div className="check">
              <input id="check-2" type="checkbox" />
              <label for="check-2" />
            </div>
          </div>
          <div className="switch_control"> {/* 스위치 버튼 */}
            <div className='text3'>
              영양관리
            </div>
            <div className="check">
              <input id="check-3" type="checkbox" />
              <label for="check-3" />
            </div>
          </div>
          <div class="switch_control"> {/* 스위치 버튼 */}
            <div className='text3'>
              환기하기
            </div>
            <div className="check">
              <input id="check-4" type="checkbox" />
              <label for="check-4" />
            </div>
          </div>
        </div >
        <br />

        <button type='submit' className='complete_button'>
          <Link to="/" className='button_link'>작성완료</Link>
        </button>
      </form>



    </div>
  )
}

export default AddGreen