import { useState } from 'react';

import UserModel from '../../models/UserModel/UserModel';

const EditUser = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // const getEditData = async () => {
  //   await axios.get(`/${id}`).then((res) => {
  //     console.log(res.data, 'ppppp33333333pppp');
  //     setUser(res.data);
  //   });
  // };
  const handleUpdate = (id) => {
    setShow(true);
    setEdit(true);
    // const val = user.find((item) => item.id === id);
    // setUser(val);
  };

  return (
    <>
      <UserModel
        handleChange={handleChange}
        user={user}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleUpdate={handleUpdate}
      />
    </>
  );
};
export default EditUser;
