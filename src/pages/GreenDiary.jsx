/* 식물 별 정리된 다이어리 */

import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiPlant from '../components/AiPlant';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import GreenDiary_photo from '../components/GreenDiary_photo';
import { DataContext } from '../contexts/DataContext';

const GreenDiary = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  const { selectedPlantData } = useContext(DataContext);


  // 식물 목록별 조회하기 위한 id값 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plant_id = queryParams.get('plant_id');

  // 다이어리 목록을 담을 State
  const [diaryList, setDiaryList] = useState([]);

  // 식물 목록별 다이어리 조회
  const readDiary = () => {
    axios.get(`${masterURL}/diary/readDiary/${plant_id}`)
      .then((res) => {
        console.log('식물 목록별 다이어리', res);
        setDiaryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readDiary();
  }, [plant_id])

  /*   const [selectedImage, setSelectedImage] = useState(0);
  
    const handleImageClick = (image) => {
      if (selectedImage.url === image.url) {
        setSelectedImage(0); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
      } else {
        setSelectedImage(image); // 새 이미지를 선택
      }
      console.log('selectedImage:', selectedImage);
    }; */






  return (
    <div className='web_top_container'>
      <div className='greendiary_container'>

        <div className='main_page1'>
          <AiPlant />

          <div className='diary_all'>
            <div className='mid_title'>
              <div className='mid_title3'>
                <img src="/Image/book_logo.PNG" alt="book" />
                다이어리 모아보기
              </div>
              <div className='icons2'>
                <div className='mid_title_bin2'>
                  <img src="/Icon/bin.png" alt="bin" />
                </div>
                <Link to={`/writediary?plant_id=${selectedPlantData.plantId}`} className='mid_title_edit'>
                  <img src="/Icon/edit.png" alt="edit" />
                </Link>
              </div>
            </div>


            <div className='diary_box'> {/* 다이어리 사진들 보이는 공간 */}
              <div className='diary_box2'>
                
                {diaryList && diaryList.map((item, idx)=>(
                <div className='diaryFile2'>
                  <Link to={`/diarydetail?diaryId=${item.diary.diaryId}`} >
                    <img className='diaryFile2'
                      src={JSON.parse(item.imgUrl.image_url)[0].image_url}
                    />
                  </Link>
                  <div className='diary_info'>
                    <div className='diary_title'>{item.diary.title}</div>
                    <div className='diary_date'>{item.diary.registrationDate}</div>
                  </div>
                </div>
                ))}

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenDiary