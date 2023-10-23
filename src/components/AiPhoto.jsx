import React from 'react'
import ItemPhoto from './ItemPhoto'
import { Link } from 'react-router-dom'

const AiPhoto = () => {

    const arr = [
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
        {
            url :'123',
            name : '몬스테라',
        },
    ]

    return (
        <div className='photo_top_container'>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>생성 AI로 나만의 이미지 만들기</div>
            </div>
            <div className="photo_second_container">
                <div className='photo_container'>
                    {arr.map((img, idx) => (
                        <ItemPhoto key={idx} data={img} />
                    ))}
                </div>
            </div>

            <div className='photo_btn_div'>
                <Link to="/aiReturn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-up-circle-fill upload_btn" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                </Link>
            </div>

        </div >
    )
}

export default AiPhoto