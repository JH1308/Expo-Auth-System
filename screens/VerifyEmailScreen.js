import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { sendVerification } from '../config/user';

import { useUserContext } from '../providers/UserContext';
import { View, Button } from '../components';
import { Colors } from '../config';

export const VerifyEmailScreen = () => {
  const { user, reload: reloadUser,} = useUserContext();


  const handleSendVerification = async () => {
    try {
      await sendVerification();
    } catch (error) {
     
    }
    return handleSendVerification;
  };

  return (
    <>
      <View isSafe style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.screenTitle}>Check your email</Text>
          <Text style={styles.screenInfo}>{user.email}</Text>
          <Text style={styles.screenInfo}>
            We sent you an email with instructions on how to verify your email
            address. Click on the link in the email to get started.
          </Text>

          <Button
            style={styles.button}
            onPress={() => handleSendVerification()}>
            <Text style={styles.buttonText}>Resend</Text>
          </Button>
          <Button style={styles.button} onPress={reloadUser}>
            <Text style={styles.buttonText}>Done</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  center: { justifyContent: 'center', alignItems: 'center' },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20,
    paddingBottom: 20,
  },
  screenInfo: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700',
  },
});
