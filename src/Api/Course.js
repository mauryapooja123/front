import axios from 'axios';
import { apiBaseUrl } from '../contants/constants';

const token = localStorage.getItem('admin_token');
const headerData = { Authorization: `Bearer ${token}` };
const addCourseApi = async (data) => {
  console.log(data, 'datata');
  try {
    const result = await axios.post(`${apiBaseUrl}/admin/course/create`, data, {
      headers: headerData,
    });
    if (result) {
      return result;
    }
  } catch (err) {
    return { data: err.response.data };
  }
};
const getCourseApi = async () => {
  try {
    const result = await axios.get(`${apiBaseUrl}/admin/course/getAll`, {
      headers: headerData,
    });
    if (result) {
      return result;
    }
  } catch (err) {
    return { data: err.response.data };
  }
};
const getEditCourseApi = async (id, data) => {
  try {
    const result = await axios.put(
      `${apiBaseUrl}/admin/course/edit/${id}`,
      data,
      {
        headers: headerData,
      }
    );
    if (result) {
      return result;
    }
  } catch (err) {
    return { data: err.response.data };
  }
};
const deleteCourseApi = async (id) => {
  try {
    const result = await axios.delete(
      `${apiBaseUrl}/admin/course/removeById/${id}`,

      {
        headers: headerData,
      }
    );
    if (result) {
      return result;
    }
  } catch (err) {
    // return { data: err.response.data };
  }
};
const getUser = async (pageNo, limit) => {
  // console.log(pageNo, limit, 'oooooooooooo');
  try {
    const result = await axios.get(
      `${apiBaseUrl}/admin/course/get/${pageNo}/${limit}`,

      {
        headers: headerData,
      }
    );
    if (result) {
      return result;
    }
  } catch (err) {
    return { data: err.response.data };
  }
};

export {
  addCourseApi,
  getCourseApi,
  getEditCourseApi,
  deleteCourseApi,
  getUser,
};
