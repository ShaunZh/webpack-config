/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-09-07 19:30:30
 * @LastEditors: Hexon
 * @LastEditTime: 2021-09-07 20:08:21
 */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';


export interface Post {
  id: number, title: string, content: string
}

type SliceState = Array<
  { id: number, title: string, content: string }
>;

const initialState: SliceState = [
  { id: 1, title: '今天是个好日子', content: '因为中了个五百万' },
  { id: 2, title: '原来是一场梦', content: '做梦中了个五百万' }
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    postsList(state) {
      return state;
    }
  }
});

export const { addPost, postsList } = postSlice.actions;
export const selectPost = (state: RootState): SliceState => state.posts;
export default postSlice.reducer;