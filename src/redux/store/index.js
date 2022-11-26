import { configureStore } from '@reduxjs/toolkit';
import musicSlice from '../../music/MusicSlice';
import reactClickerSlice from '../../reactClicker/ReactClickerSlice';

const store = configureStore({
  reducer: {
    reactClicker: reactClickerSlice.reducer,
    music: musicSlice.reducer,
  },
});
export default store;
