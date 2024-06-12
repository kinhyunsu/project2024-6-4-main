// 파일 경로: src/components/MatchView.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchView = ({ matchId }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`/api/match/user/${matchId}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching matched user info:', error);
            }
        };

        fetchUserInfo();
    }, [matchId]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{userInfo.memberName}</h1>
            <p>{userInfo.mbti}</p>
            <img src={userInfo.profilePictureUrl} alt="Profile" />
        </div>
    );
};

export default MatchView;
