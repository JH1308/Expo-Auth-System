import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { useUserContext } from '../providers/UserContext';

export const HomeScreen = () => {
  const { user } = useUserContext();

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  return (
    <View style={styles.container}>
      <Text>{user.email}</Text>
      <Button title='Sign Out' onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
