import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from './homecss';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const handleLogin = () => {
        // 로그인 처리 로직 (예: 서버 요청 등)
        // 로그인이 성공하면 setIsLoggedIn(true) 및 setUserInfo(userdata) 호출
        setIsLoggedIn(true);
        setUserInfo({ username: "exampleUser", email: "user@example.com" });
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직
        setIsLoggedIn(false);
        setUserInfo(null);
    };


    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Profile</Text>
                {isLoggedIn ? (
                    <View>
                        <Text>Welcome, {userInfo.username}!</Text>
                        <Text>Email: {userInfo.email}</Text>
                        <Button title="Logout" onPress={handleLogout} />
                    </View>
                ) : (
                <View>
                    <Text>Please Login</Text>
                    <Button title="Login" onPress={handleLogin} />
                </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Total Steps🦶</Text>
                <Text style={styles.content}>Login First!</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Auction Menu</Text>
                <Text style={styles.content}>Login First!</Text>
            </View>
        </View>
    );
}

export default Home;