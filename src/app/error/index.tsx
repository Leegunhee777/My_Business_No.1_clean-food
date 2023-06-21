import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorScreen = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <b style={{ fontSize: '24px', marginTop: '20%' }}>
        페이지를 찾을 수 없습니다. 404
        <div
          style={{
            border: '2px solid black',
            margin: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로 돌아가기
        </div>
      </b>
    </div>
  );
};

export default ErrorScreen;
