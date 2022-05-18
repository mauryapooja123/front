import { useEffect, useState } from 'react';
import User from '.';
import {
  addCourseApi,
  getCourseApi,
  getEditCourseApi,
  deleteCourseApi,
  getUser,
} from '../../Api/Course';
import UserModel from '../../models/UserModel/UserModel';
import { toast } from 'react-toastify';
import Layout from '../../layout/Layout';
import ReactPagination from './ReactPagination';

const IndexUser = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageLimit, setPageLimit] = useState(3);
  const [totalCount, setTotalCount] = useState('');

  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [userData, setUserData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    setShow(true);
    setEdit(false);
    setUser({});
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    getUsersData();
  }, [activePage]);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber, 'ppppppppp');
    setActivePage(pageNumber);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError({});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await addCourseApi(user);
      if (res) {
        toast.success(res.data.message);
        setShow(false);
        console.log(show, 'show');
      } else {
        toast.error(res.data.message);
      }
      getAllData();
    }
  };

  const getAllData = async () => {
    const res = await getCourseApi();
    console.log(res, 'dddddddddddd');
    if (res && res.status === 200) {
      setUserData(res.data.data);
      //setTotalCount(res.data.totalCount);
    }
  };

  // console.log(userData, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuu');
  const isValid = () => {
    let formData = true;
    switch (true) {
      case !user.state:
        setError({ state: 'State field is required!' });
        formData = false;
        break;
      case !user.title:
        setError({ title: 'Title field is required!' });
        formData = false;
        break;

      default:
        formData = true;
    }
    return formData;
  };

  const handleEdit = (data) => {
    console.log(data, 'ppppppppppppppp');
    handleShow();
    setEdit(true);
    setUser(data);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setEdit(true);
    console.log(user, 'fffffffffffffff');
    console.log('sjdsdhsjd');
    if (isValid()) {
      const res = await getEditCourseApi(user.id, user);
      if (res) {
        toast.success(res.data.message);
        setShow(false);
        getAllData();
      } else {
        toast.error(res.data.message);
      }
    }
  };
  const handledelete = async (id) => {
    console.log(id, 'ppp');
    const res = await deleteCourseApi(id);
    console.log(res, 'pppppppppppplllllllllll');
    getAllData();
  };

  const getUsersData = async () => {
    const res = await getUser(activePage, pageLimit);
    console.log(res.data.totalCount, 'kkkkkkkkkkklllll');
    setUserData(res.data.data);
    setTotalCount(res.data.totalCount);
  };

  return (
    <>
      <Layout>
        <UserModel
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          user={user}
          edit={edit}
          handleUpdate={handleUpdate}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />

        <User
          handleAdd={handleAdd}
          userData={userData}
          handleEdit={handleEdit}
          handledelete={handledelete}
        />
        <ReactPagination
          activePage={activePage}
          totalCount={totalCount}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
        />
      </Layout>
    </>
  );
};
export default IndexUser;
