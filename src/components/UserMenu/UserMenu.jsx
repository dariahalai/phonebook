import { getUserThunk } from 'redux/user/user.thunk';
import { selectUser } from 'redux/user/user.selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { authLogOutThunk } from 'redux/auth/auth.thunk';
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk());
    }
  }, [token, dispatch]);

  return (
    <div>
      {user && (
        <>
          <p>Hello, {user.name}</p>
          <p>{user.email}</p>
        </>
      )}
      <button type='button' onClick={()=>dispatch(authLogOutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
