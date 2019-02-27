import axios from 'axios';

const KEY = 'AIzaSyAc-swij21Tqw8h-CS7LPaO1uo-nih1btQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
