import express from 'express';
const app = express();
const PORT = 5001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '함 가보이시더~',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(
    `🚀 서버가 ${process.env.NODE_ENV || 'development'} 환경, 포트 ${PORT}에서 실행 중입니다!`,
  );
});
