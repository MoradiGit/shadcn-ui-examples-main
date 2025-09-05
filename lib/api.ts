import { User } from '@/types';

export const fetchRandomUser = async (): Promise<User> => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
    
    if (!response.ok) {
      throw new Error('خطا در دریافت اطلاعات کاربر');
    }
    
    const data = await response.json();
    const userData = data.results[0];
    
    return {
      id: userData.login.uuid,
      name: `${userData.name.first} ${userData.name.last}`,
      email: userData.email,
      picture: userData.picture.large,
      mobile: userData.cell
    };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('خطا در دریافت اطلاعات کاربر');
  }
};