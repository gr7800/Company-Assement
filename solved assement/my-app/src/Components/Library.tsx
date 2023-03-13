import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './library.module.css';
import Popup from './Popup';
import axios from 'axios';
import { format } from 'date-fns';

interface Data {
  author: string;
  description: string;
  image_lnk: string;
  launchdate: string;
  title: string;
}

const Library: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>([]);
  const [desc, setDesc] = useState<string>('');

  const email = 'gt29015@gmail.com';

  const fetchdata = () => {
    axios
      .get('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg', {
        headers: {
          token: email,
        },
      })
      .then((res) => setData(JSON.parse(res.data.dt)));
  };

  const AddNewBlog = () => {
    navigate('/newblog');
  };

  useEffect(() => {
    fetchdata();
  }, []);

  console.log('data', data);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headContainer}>
          <h1 className={classes.header}>Library</h1>
          <button onClick={AddNewBlog}>New blog</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Cover image</th>
                <th>Lunch date</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {open && <Popup closeDesc={() => setOpen(false)} description={desc} />}
              {data.map((val, key) => {
                if (val.title !== '' && val.author !== '') {
                  return (
                    <tr key={key} className={classes.seperator}>
                      <td>
                        <img src={val.image_lnk} height={35} width={35} alt="" />
                      </td>
                      <td>{format(new Date(val.launchdate), 'MMMM dd, yyyy')}</td>
                      <td
                        onClick={() => {
                          setOpen(true);
                          setDesc(val.description);
                        }}
                        className={classes.a}
                      >
                        {val.title}
                      </td>
                      <td>{val.author}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Library;
