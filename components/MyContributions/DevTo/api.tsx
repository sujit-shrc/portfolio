import axios from 'axios';

interface DevToPost {
  id: number;
  title: string;
  cover_image: string;
  published_at: string;
  url: string;
}

const fetchDevToPosts = async () => {
  try {
    const response = await axios.get<DevToPost[]>(
      'https://dev.to/api/articles?username=mnamesujit'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export default fetchDevToPosts;