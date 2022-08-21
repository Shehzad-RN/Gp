import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = async () => {
    try {
        const value = await AsyncStorage.removeItem('persist:root');
        if (value == null) {
            // We have data!!
            console.log('logout component', value);
        } else if (value !== null) {
            // We have data!!
            console.log(value);
            return false
        }
    } catch (error) {
        console.log(error);
    }
};


