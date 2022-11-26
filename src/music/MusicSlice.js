import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: [
    {
      name: 'Em của ngày hôm qua',
      lyrics: 'Eh eh eh.. Em đang nơi nào...  Can you feel me. Can you feel me. ',
      author: 'Sơn Tùng',
    },
    {
      name: 'Người Anh Em',
      lyrics: 'Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em',
      author: 'Nhạc Hoa, Lời Việt: Mạnh Thắng',
    },
  ],
  reducers: {},
});
export default musicSlice;
