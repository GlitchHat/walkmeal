import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './homecss';
import Modal from 'react-native-modal';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoginPageVisible,setIsLoginPageVisible] = useState(false);

    const toggleLogin = () => {
        setIsLoginPageVisible(!isLoginPageVisible);
    }

    const handleLogin = () => {
        if (username && password) {
            setIsLoginPageVisible(false);
        }
        // 로그인 처리 로직 (예: 서버 요청 등)
        // 로그인이 성공하면 setIsLoggedIn(true) 및 setUserInfo(userdata) 호출
        setIsLoggedIn(true);
        setUserInfo({ username: "exampleUser", email: "user@example.com" , totalSteps : 1980, dailySteps : 180});
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직
        setIsLoggedIn(false);
        setUserInfo(null);
    };


    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Modal isVisible={isLoginPageVisible}>
                    <View>
                        <TextInput
                            placeholder="Id"
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />
                        <TextInput
                            placeholder="Pw"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <Button title="Login" onPress={handleLogin} />
                        <Button title="Close" onPress={toggleLogin} />
                    </View>
                </Modal>
            </View>
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
                    <Button title="Login" onPress={toggleLogin} />
                </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Total Steps🦶</Text>
                {isLoggedIn ? (
                    <View>
                        <Text>{userInfo.totalSteps}</Text>
                        <Text>Today. {userInfo.dailySteps}</Text>
                    </View>
                ) : (
                <View>
                    <Text>Please Login</Text>
                </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Auction Menu</Text>
                <Text style={styles.content}>Login First!</Text>
            </View>
        </View>
    );
}

export default Home;