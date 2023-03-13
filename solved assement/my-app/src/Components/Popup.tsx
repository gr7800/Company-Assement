import React, { useState, useEffect } from 'react';
import classes from './popup.module.css';
import close from '../Components/close-icon.png';
import axios from 'axios';

interface Props {
description: string;
closeDesc: (isOpen: boolean) => void;
}

const Popup: React.FC<Props> = ({ description, closeDesc }) => {
const str = 'gt29015@gmail.com';
let email = str.replace(/[^a-zA-Z0-9 ]/g, '');

const [desc, setDesc] = useState<any>([]);

useEffect(() => {
axios
.get('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg', {
headers: {
token: email,
},
})
.then((res) => setDesc(res.data));
},[]);
console.log(desc)

return (
<>
<div className={classes.container}>
<div className={classes.model}>
<div className={classes.head}>
<div className={classes.desc}>Description</div>
<div className={classes.closeImg}>
<img src={close} onClick={() => closeDesc(false)} alt="close button" />
</div>
</div>
<div className={classes.description}>
<p>{description}</p>
</div>
</div>
</div>
</>
);
};

export default Popup;