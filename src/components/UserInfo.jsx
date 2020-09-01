import React from 'react';

const UserInfo = ({name, email, gen}) => {
    return (
        <div>
        <h4>name: {name}</h4>
        <h4>email:{email}</h4>
        <h4>gen:{gen}</h4>     
                    
        </div>
    );
}

export default UserInfo;
